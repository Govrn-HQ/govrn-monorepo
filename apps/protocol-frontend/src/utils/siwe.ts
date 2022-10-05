import { ethers } from 'ethers';
import { ParsedMessage, ParsedMessageRegExp } from '@spruceid/siwe-parser';
import { providers, Contract, utils } from 'ethers';

import { randomStringForEntropy } from '@stablelib/random';
import { BASE_URL } from './constants';

/**
 * This method is supposed to check if an address is conforming to EIP-55.
 * @param address Address to be checked if conforms with EIP-55.
 * @returns Either the return is or not in the EIP-55 format.
 */
export const isEIP55Address = (address: string) => {
  return address === ethers.utils.getAddress(address);
};

/**
 * This method calls the EIP-1271 method for Smart Contract wallets
 * @param message The EIP-4361 parsed message
 * @param provider Web3 provider able to perform a contract check (Web3/EthersJS).
 * @returns {Promise<boolean>} Checks for the smart contract (if it exists) if
 * the signature is valid for given address.
 */
export const checkContractWalletSignature = async (
  message: SiweMessage,
  signature: string,
  provider?: any,
): Promise<boolean> => {
  if (!provider) {
    return false;
  }

  const abi = [
    'function isValidSignature(bytes32 _message, bytes _signature) public view returns (bool)',
  ];
  const walletContract = new Contract(message.address, abi, provider);
  const hashMessage = utils.hashMessage(message.prepareMessage());
  const isValidSignature = await walletContract.isValidSignature(
    hashMessage,
    signature,
  );
  if (!isValidSignature) {
    throw new Error('Invalid signature.');
  }
  return isValidSignature;
};

/**
 * This method leverages a native CSPRNG with support for both browser and Node.js
 * environments in order generate a cryptographically secure nonce for use in the
 * SiweMessage in order to prevent replay attacks.
 *
 * 96 bits has been chosen as a number to sufficiently balance size and security considerations
 * relative to the lifespan of it's usage.
 *
 * @returns cryptographically generated random nonce with 96 bits of entropy encoded with
 * an alphanumeric character set.
 */
export const generateNonce = (): string => {
  return randomStringForEntropy(96);
};

function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

export interface VerifyParams {
  /** Signature of the message signed by the wallet */
  signature: string;

  /** RFC 4501 dns authority that is requesting the signing. */
  domain?: string;

  /** Randomized token used to prevent replay attacks, at least 8 alphanumeric characters. */
  nonce?: string;

  /**ISO 8601 datetime string of the current time. */
  time?: string;
}

export const VerifyParamsKeys: Array<keyof VerifyParams> = [
  'signature',
  'domain',
  'nonce',
  'time',
];

export interface VerifyOpts {
  /** ethers provider to be used for EIP-1271 validation */
  provider?: providers.Provider;

  /** If the library should reject promises on errors, defaults to false */
  suppressExceptions?: boolean;
}

export const VerifyOptsKeys: Array<keyof VerifyOpts> = [
  'provider',
  'suppressExceptions',
];

/**
 * Returned on verifications.
 */
export interface SiweResponse {
  /** Boolean representing if the message was verified with success. */
  success: boolean;

  /** If present `success` MUST be false and will provide extra information on the failure reason. */
  error?: SiweError;

  /** Original message that was verified. */
  data: SiweMessage;
}

/**
 * Interface used to return errors in SiweResponses.
 */
export class SiweError {
  /** Type of the error. */
  type: SiweErrorType;
  /** Expected value or condition to pass. */
  expected?: string;
  /** Received value that caused the failure. */
  received?: string;

  constructor(type: SiweErrorType, expected?: string, received?: string) {
    this.type = type;
    this.expected = expected;
    this.received = received;
  }
}

/**
 * Possible message error types.
 */
export enum SiweErrorType {
  /** `expirationTime` is present and in the past. */
  EXPIRED_MESSAGE = 'Expired message.',

  /** `domain` is not a valid authority or is empty. */
  INVALID_DOMAIN = 'Invalid domain.',

  /** `domain` don't match the domain provided for verification. */
  DOMAIN_MISMATCH = 'Domain do not match provided domain for verification.',

  /** `nonce` don't match the nonce provided for verification. */
  NONCE_MISMATCH = 'Nonce do not match provided nonce for verification.',

  /** `address` does not conform to EIP-55 or is not a valid address. */
  INVALID_ADDRESS = 'Invalid address.',

  /** `uri` does not conform to RFC 3986. */
  INVALID_URI = 'URI does not conform to RFC 3986.',

  /** `nonce` is smaller then 8 characters or is not alphanumeric */
  INVALID_NONCE = 'Nonce size smaller then 8 characters or is not alphanumeric.',

  /** `notBefore` is present and in the future. */
  NOT_YET_VALID_MESSAGE = 'Message is not valid yet.',

  /** Signature doesn't match the address of the message. */
  INVALID_SIGNATURE = 'Signature do not match address of the message.',

  /** `expirationTime`, `notBefore` or `issuedAt` not complient to ISO-8601. */
  INVALID_TIME_FORMAT = 'Invalid time format.',

  /** `version` is not 1. */
  INVALID_MESSAGE_VERSION = 'Invalid message version.',

  /** Thrown when some required field is missing. */
  UNABLE_TO_PARSE = 'Unable to parse the message.',
}

const BACKEND_ADDR = `${BASE_URL}`;

export async function createSiweMessage(
  address: string,
  statement: string,
  chainId: string,
  // provider: ethers.providers.Web3Provider
) {
  // const signer = provider.getSigner();
  const domain = window.location.host;
  const origin = window.location.origin;
  try {
    const res = await fetch(`${BACKEND_ADDR}/nonce`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(res);
    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: '1',
      chainId: parseInt(chainId),
      nonce: await res.text(),
      expirationTime: new Date(Date.now() + 86400000).toISOString(), // 1 day expiration
    });
    return message.prepareMessage();
  } catch (e) {
    console.error(e);
    return;
  }
}
export class SiweMessage {
  /**RFC 4501 dns authority that is requesting the signing. */
  domain: string;
  /**Ethereum address performing the signing conformant to capitalization
   * encoded checksum specified in EIP-55 where applicable. */
  address: string;
  /**Human-readable ASCII assertion that the user will sign, and it must not
   * contain `\n`. */
  statement?: string;
  /**RFC 3986 URI referring to the resource that is the subject of the signing
   *  (as in the __subject__ of a claim). */
  uri: string;
  /**Current version of the message. */
  version: string;
  /**EIP-155 Chain ID to which the session is bound, and the network where
   * Contract Accounts must be resolved. */
  chainId: number;
  /**Randomized token used to prevent replay attacks, at least 8 alphanumeric
   * characters. */
  nonce: string;
  /**ISO 8601 datetime string of the current time. */
  issuedAt: string;
  /**ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message is no longer valid. */
  expirationTime?: string;
  /**ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message will become valid. */
  notBefore?: string;
  /**System-specific identifier that may be used to uniquely refer to the
   * sign-in request. */
  requestId?: string;
  /**List of information or references to information the user wishes to have
   * resolved as part of authentication by the relying party. They are
   * expressed as RFC 3986 URIs separated by `\n- `. */
  resources?: Array<string>;

  /**
   * Creates a parsed Sign-In with Ethereum Message (EIP-4361) object from a
   * string or an object. If a string is used an ABNF parser is called to
   * validate the parameter, otherwise the fields are attributed.
   * @param param {string | SiweMessage} Sign message as a string or an object.
   */
  constructor(param: string | Partial<SiweMessage>) {
    this.domain = '';
    this.address = '';
    this.statement = '';
    this.uri = '';
    this.version = '';
    this.nonce = '';
    this.issuedAt = '';
    this.expirationTime = '';
    this.notBefore = '';
    this.requestId = '';
    this.chainId = 0;
    this.resources = undefined;

    if (typeof param === 'string') {
      const parsedMessage = new ParsedMessage(param);
      this.domain = parsedMessage.domain;
      this.address = parsedMessage.address;
      this.statement = parsedMessage.statement || '';
      this.uri = parsedMessage.uri;
      this.version = parsedMessage.version;
      this.nonce = parsedMessage.nonce;
      this.issuedAt = parsedMessage.issuedAt;
      this.expirationTime = parsedMessage.expirationTime || '';
      this.notBefore = parsedMessage.notBefore || '';
      this.requestId = parsedMessage.requestId || '';
      this.chainId = parsedMessage.chainId;
      this.resources = parsedMessage.resources || [];
    } else {
      Object.assign(this, param);
      if (typeof this.chainId === 'string') {
        this.chainId = parseInt(this.chainId);
      }
    }
    this.nonce = this.nonce || generateNonce();
    this.validateMessage();
  }

  /**
   * Given a sign message (EIP-4361) returns the correct matching groups.
   * @param message {string}
   * @returns {RegExpExecArray} The matching groups for the message
   */
  static regexFromMessage(message: string): RegExpExecArray | undefined {
    const parsedMessage = new ParsedMessageRegExp(message);
    return parsedMessage.match;
  }

  /**
   * This function can be used to retrieve an EIP-4361 formated message for
   * signature, although you can call it directly it's advised to use
   * [prepareMessage()] instead which will resolve to the correct method based
   * on the [type] attribute of this object, in case of other formats being
   * implemented.
   * @returns {string} EIP-4361 formated message, ready for EIP-191 signing.
   */
  toMessage(): string {
    /** Validates all fields of the object */
    this.validateMessage();

    const header = `${this.domain} wants you to sign in with your Ethereum account:`;
    const uriField = `URI: ${this.uri}`;
    let prefix = [header, this.address].join('\n');
    const versionField = `Version: ${this.version}`;

    if (!this.nonce) {
      this.nonce = generateNonce();
    }

    const chainField = `Chain ID: ${this.chainId}` || '1';

    const nonceField = `Nonce: ${this.nonce}`;

    const suffixArray = [uriField, versionField, chainField, nonceField];

    if (this.issuedAt) {
      Date.parse(this.issuedAt);
    }
    this.issuedAt = this.issuedAt ? this.issuedAt : new Date().toISOString();
    suffixArray.push(`Issued At: ${this.issuedAt}`);

    if (this.expirationTime) {
      const expiryField = `Expiration Time: ${this.expirationTime}`;

      suffixArray.push(expiryField);
    }

    if (this.notBefore) {
      suffixArray.push(`Not Before: ${this.notBefore}`);
    }

    if (this.requestId) {
      suffixArray.push(`Request ID: ${this.requestId}`);
    }

    if (this.resources) {
      suffixArray.push(
        [`Resources:`, ...this.resources.map(x => `- ${x}`)].join('\n'),
      );
    }

    const suffix = suffixArray.join('\n');
    prefix = [prefix, this.statement].join('\n\n');
    if (this.statement) {
      prefix += '\n';
    }
    return [prefix, suffix].join('\n');
  }

  /**
   * This method parses all the fields in the object and creates a messaging for signing
   * message according with the type defined.
   * @returns {string} Returns a message ready to be signed according with the
   * type defined in the object.
   */
  prepareMessage(): string {
    let message: string;
    switch (this.version) {
      case '1': {
        message = this.toMessage();
        break;
      }

      default: {
        message = this.toMessage();
        break;
      }
    }
    return message;
  }

  /**
   * @deprecated
   * Verifies the integrity of the object by matching its signature.
   * @param signature Signature to match the address in the message.
   * @param provider Ethers provider to be used for EIP-1271 validation
   */
  async validate(signature: string, provider?: providers.Provider) {
    console.warn(
      'validate() has been deprecated, please update your code to use verify(). validate() may be removed in future versions.',
    );
    return this.verify({ signature }, { provider, suppressExceptions: false });
  }

  /**
   * Verifies the integrity of the object by matching its signature.
   * @param params Parameters to verify the integrity of the message, signature is required.
   * @returns {Promise<SiweMessage>} This object if valid.
   */
  async verify(
    params: VerifyParams,
    opts: VerifyOpts = { suppressExceptions: false },
  ): Promise<SiweResponse> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<SiweResponse>(async (resolve, reject) => {
      Object.keys(params).forEach((key: string) => {
        if (!VerifyParamsKeys.includes(key as keyof VerifyParams)) {
          reject({
            success: false,
            data: this,
            error: new Error(`${key} is not a valid key for VerifyParams.`),
          });
        }
      });

      Object.keys(opts).forEach((key: string) => {
        if (!VerifyOptsKeys.includes(key as keyof VerifyOpts)) {
          reject({
            success: false,
            data: this,
            error: new Error(`${key} is not a valid key for VerifyOpts.`),
          });
        }
      });

      const assert = (result: {
        success: boolean;
        data: SiweMessage;
        error: SiweError;
      }) => {
        if (opts.suppressExceptions) {
          resolve(result);
        } else {
          reject(result);
        }
      };

      const { signature, domain, nonce, time } = params;

      /** Domain binding */
      if (domain && domain !== this.domain) {
        assert({
          success: false,
          data: this,
          error: new SiweError(
            SiweErrorType.DOMAIN_MISMATCH,
            domain,
            this.domain,
          ),
        });
      }

      /** Nonce binding */
      if (nonce && nonce !== this.nonce) {
        assert({
          success: false,
          data: this,
          error: new SiweError(SiweErrorType.NONCE_MISMATCH, nonce, this.nonce),
        });
      }

      /** Check time or now */
      const checkTime = new Date(time || new Date());

      /** Message not expired */
      if (this.expirationTime) {
        const expirationDate = new Date(this.expirationTime);
        if (checkTime.getTime() >= expirationDate.getTime()) {
          assert({
            success: false,
            data: this,
            error: new SiweError(
              SiweErrorType.EXPIRED_MESSAGE,
              `${checkTime.toISOString()} < ${expirationDate.toISOString()}`,
              `${checkTime.toISOString()} >= ${expirationDate.toISOString()}`,
            ),
          });
        }
      }

      /** Message is valid already */
      if (this.notBefore) {
        const notBefore = new Date(this.notBefore);
        if (checkTime.getTime() < notBefore.getTime()) {
          assert({
            success: false,
            data: this,
            error: new SiweError(
              SiweErrorType.NOT_YET_VALID_MESSAGE,
              `${checkTime.toISOString()} >= ${notBefore.toISOString()}`,
              `${checkTime.toISOString()} < ${notBefore.toISOString()}`,
            ),
          });
        }
      }
      let EIP4361Message;
      try {
        EIP4361Message = this.prepareMessage();
      } catch (e) {
        assert({
          success: false,
          data: this,
          error: e as SiweError,
        });
      }

      /** Recover address from signature */
      let addr;
      try {
        addr = utils.verifyMessage(EIP4361Message || '', signature);
      } catch (e) {
        console.error(e);
      } finally {
        /** Match signature with message's address */
        if (addr !== this.address) {
          let isValid = false;
          try {
            /** Try resolving EIP-1271 if address doesn't match */
            isValid = await checkContractWalletSignature(
              this,
              signature,
              opts.provider,
            );
          } catch (_) {
            isValid = false;
          } finally {
            if (!isValid) {
              assert({
                success: false,
                data: this,
                error: new SiweError(
                  SiweErrorType.INVALID_SIGNATURE,
                  addr,
                  `Resolved address to be ${this.address}`,
                ),
              });
            }
          }
        }
      }

      resolve({
        success: true,
        data: this,
      });
    });
  }

  /**
   * Validates the values of this object fields.
   * @throws Throws an {ErrorType} if a field is invalid.
   */
  private validateMessage(...args: string[]) {
    /** Checks if the user might be using the function to verify instead of validate. */
    if (args.length > 0) {
      throw new SiweError(
        SiweErrorType.UNABLE_TO_PARSE,
        `Unexpected argument in the validateMessage function.`,
      );
    }

    /** `domain` check. */
    if (
      !this.domain ||
      this.domain.length === 0 ||
      !/[^#?]*/.test(this.domain)
    ) {
      throw new SiweError(
        SiweErrorType.INVALID_DOMAIN,
        `${this.domain} to be a valid domain.`,
      );
    }

    /** EIP-55 `address` check. */
    if (!isEIP55Address(this.address)) {
      throw new SiweError(
        SiweErrorType.INVALID_ADDRESS,
        utils.getAddress(this.address),
        this.address,
      );
    }

    /** Check if the URI is valid. */
    if (!isValidURL(this.uri)) {
      throw new SiweError(
        SiweErrorType.INVALID_URI,
        `${this.uri} to be a valid uri.`,
      );
    }

    /** Check if the version is 1. */
    if (this.version !== '1') {
      throw new SiweError(
        SiweErrorType.INVALID_MESSAGE_VERSION,
        '1',
        this.version,
      );
    }

    /** Check if the nonce is alphanumeric and bigger then 8 characters */
    const nonce = this?.nonce?.match(/[a-zA-Z0-9]{8,}/);
    if (!nonce || this.nonce.length < 8 || nonce[0] !== this.nonce) {
      throw new SiweError(
        SiweErrorType.INVALID_NONCE,
        `Length > 8 (${nonce ? nonce.length : 0}). Alphanumeric.`,
        this.nonce,
      );
    }

    const ISO8601 =
      /([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))/; // eslint-disable-line no-useless-escape
    /** `issuedAt` conforms to ISO-8601 */
    if (this.issuedAt) {
      if (!ISO8601.test(this.issuedAt)) {
        throw new Error(SiweErrorType.INVALID_TIME_FORMAT);
      }
    }

    /** `expirationTime` conforms to ISO-8601 */
    if (this.expirationTime) {
      if (!ISO8601.test(this.expirationTime)) {
        throw new Error(SiweErrorType.INVALID_TIME_FORMAT);
      }
    }

    /** `notBefore` conforms to ISO-8601 */
    if (this.notBefore) {
      if (!ISO8601.test(this.notBefore)) {
        throw new Error(SiweErrorType.INVALID_TIME_FORMAT);
      }
    }
  }
}
