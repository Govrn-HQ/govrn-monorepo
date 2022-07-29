// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: remove this ^ after migrating from v7 to v8.
import apgApi from 'apg-js/src/apg-api/api';
import apgLib from 'apg-js/src/apg-lib/node-exports';
import { ethers } from 'ethers';

function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

export const isEIP55Address = (address: string) => {
  return address === ethers.utils.getAddress(address);
};

const GRAMMAR = `
sign-in-with-ethereum =
    domain %s" wants you to sign in with your Ethereum account:" LF
    address LF
    LF
    [ statement LF ]
    LF
    %s"URI: " URI LF
    %s"Version: " version LF
    %s"Chain ID: " chain-id LF
    %s"Nonce: " nonce LF
    %s"Issued At: " issued-at
    [ LF %s"Expiration Time: " expiration-time ]
    [ LF %s"Not Before: " not-before ]
    [ LF %s"Request ID: " request-id ]
    [ LF %s"Resources:"
    resources ]
domain = authority
address = "0x" 40*40HEXDIG
    ; Must also conform to captilization
    ; checksum encoding specified in EIP-55
    ; where applicable (EOAs).
statement = 1*( reserved / unreserved / " " )
    ; The purpose is to exclude LF (line breaks).
version = "1"
nonce = 8*( ALPHA / DIGIT )
issued-at = date-time
expiration-time = date-time
not-before = date-time
request-id = *pchar
chain-id = 1*DIGIT
    ; See EIP-155 for valid CHAIN_IDs.
resources = *( LF resource )
resource = "- " URI
; ------------------------------------------------------------------------------
; RFC 3986
URI           = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
hier-part     = "//" authority path-abempty
              / path-absolute
              / path-rootless
              / path-empty
scheme        = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
authority     = [ userinfo "@" ] host [ ":" port ]
userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
host          = IP-literal / IPv4address / reg-name
port          = *DIGIT
IP-literal    = "[" ( IPv6address / IPvFuture  ) "]"
IPvFuture     = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
IPv6address   =                            6( h16 ":" ) ls32
              /                       "::" 5( h16 ":" ) ls32
              / [               h16 ] "::" 4( h16 ":" ) ls32
              / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
              / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
              / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
              / [ *4( h16 ":" ) h16 ] "::"              ls32
              / [ *5( h16 ":" ) h16 ] "::"              h16
              / [ *6( h16 ":" ) h16 ] "::"
h16           = 1*4HEXDIG
ls32          = ( h16 ":" h16 ) / IPv4address
IPv4address   = dec-octet "." dec-octet "." dec-octet "." dec-octet
dec-octet     = DIGIT                 ; 0-9
                 / %x31-39 DIGIT         ; 10-99
                 / "1" 2DIGIT            ; 100-199
                 / "2" %x30-34 DIGIT     ; 200-249
                 / "25" %x30-35          ; 250-255
reg-name      = *( unreserved / pct-encoded / sub-delims )
path-abempty  = *( "/" segment )
path-absolute = "/" [ segment-nz *( "/" segment ) ]
path-rootless = segment-nz *( "/" segment )
path-empty    = 0pchar
segment       = *pchar
segment-nz    = 1*pchar
pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
query         = *( pchar / "/" / "?" )
fragment      = *( pchar / "/" / "?" )
pct-encoded   = "%" HEXDIG HEXDIG
unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
reserved      = gen-delims / sub-delims
gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
              / "*" / "+" / "," / ";" / "="
; ------------------------------------------------------------------------------
; RFC 3339
date-fullyear   = 4DIGIT
date-month      = 2DIGIT  ; 01-12
date-mday       = 2DIGIT  ; 01-28, 01-29, 01-30, 01-31 based on
                          ; month/year
time-hour       = 2DIGIT  ; 00-23
time-minute     = 2DIGIT  ; 00-59
time-second     = 2DIGIT  ; 00-58, 00-59, 00-60 based on leap second
                          ; rules
time-secfrac    = "." 1*DIGIT
time-numoffset  = ("+" / "-") time-hour ":" time-minute
time-offset     = "Z" / time-numoffset
partial-time    = time-hour ":" time-minute ":" time-second
                  [time-secfrac]
full-date       = date-fullyear "-" date-month "-" date-mday
full-time       = partial-time time-offset
date-time       = full-date "T" full-time
; ------------------------------------------------------------------------------
; RFC 5234
ALPHA          =  %x41-5A / %x61-7A   ; A-Z / a-z
LF             =  %x0A
                  ; linefeed
DIGIT          =  %x30-39
                  ; 0-9
HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`;

export class ParsedMessage {
  [key: string]: any;

  domain?: string;
  address?: string;
  statement?: string | null;
  uri?: string;
  version?: string;
  chainId?: number;
  nonce?: string;
  // issuedAt?: string;
  // expirationTime?: string | null;
  // notBefore?: string | null;
  // requestId?: string | null;
  resources?: Array<string> | null;

  constructor(msg: string) {
    const api = new apgApi(GRAMMAR);
    api.generate();
    if (api.errors.length) {
      console.error(api.errorsToAscii());
      console.error(api.linesToAscii());
      console.log(api.displayAttributeErrors());
      throw new Error(`ABNF grammar has errors`);
    }

    const grammarObj = api.toObject();
    const parser = new apgLib.parser();
    parser.ast = new apgLib.ast();
    const id = apgLib.ids;

    parser.ast.callbacks.domain = function (
      state: number,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { domain: string }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.domain = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    const address = function (
      state: number,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { address: string }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.address = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks.address = address;

    const statement = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { statement: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.statement = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks.statement = statement;
    const uri = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { uri: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        if (!data.uri) {
          data.uri = apgLib.utils.charsToString(
            chars,
            phraseIndex,
            phraseLength
          );
        }
      }
      return ret;
    };
    parser.ast.callbacks.uri = uri;
    const version = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { version: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.version = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks.version = version;
    const chainId = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { chainId: number }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.chainId = parseInt(
          apgLib.utils.charsToString(chars, phraseIndex, phraseLength)
        );
      }
      return ret;
    };
    parser.ast.callbacks['chain-id'] = chainId;
    const nonce = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { nonce: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.nonce = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks.nonce = nonce;
    const issuedAt = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { issuedAt: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.issuedAt = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks['issued-at'] = issuedAt;
    const expirationTime = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { expirationTime: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.expirationTime = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks['expiration-time'] = expirationTime;
    const notBefore = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { notBefore: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.notBefore = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks['not-before'] = notBefore;
    const requestId = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { requestId: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.requestId = apgLib.utils.charsToString(
          chars,
          phraseIndex,
          phraseLength
        );
      }
      return ret;
    };
    parser.ast.callbacks['request-id'] = requestId;
    const resources = function (
      state: any,
      chars: any,
      phraseIndex: any,
      phraseLength: any,
      data: { resources: any }
    ) {
      const ret = id.SEM_OK;
      if (state === id.SEM_PRE) {
        data.resources = apgLib.utils
          .charsToString(chars, phraseIndex, phraseLength)
          .slice(3)
          .split('\n- ');
      }
      return ret;
    };
    parser.ast.callbacks.resources = resources;

    const result = parser.parse(grammarObj, 'sign-in-with-ethereum', msg);
    if (!result.success) {
      throw new Error(`Invalid message: ${JSON.stringify(result)}`);
    }
    const elements = {};
    parser.ast.translate(elements);

    for (const [key, value] of Object.entries(elements)) {
      this[key] = value;
    }

    if (this.domain?.length === 0) {
      throw new Error('Domain cannot be empty.');
    }

    if (!isEIP55Address(this.address ?? '')) {
      throw new Error('Address not conformant to EIP-55.');
    }
  }
}

const DOMAIN =
  '(?<domain>([^?#]*)) wants you to sign in with your Ethereum account:';
const ADDRESS = '\\n(?<address>0x[a-zA-Z0-9]{40})\\n\\n';
const STATEMENT = '((?<statement>[^\\n]+)\\n)?';
const URI = '(([^:?#]+):)?(([^?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?';
const URI_LINE = `\\nURI: (?<uri>${URI}?)`;
const VERSION = '\\nVersion: (?<version>1)';
const CHAIN_ID = '\\nChain ID: (?<chainId>[0-9]+)';
const NONCE = '\\nNonce: (?<nonce>[a-zA-Z0-9]{8,})';
const DATETIME = `([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([\+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))`; // eslint-disable-line no-useless-escape
const ISSUED_AT = `\\nIssued At: (?<issuedAt>${DATETIME})`;
const EXPIRATION_TIME = `(\\nExpiration Time: (?<expirationTime>${DATETIME}))?`;
const NOT_BEFORE = `(\\nNot Before: (?<notBefore>${DATETIME}))?`;
const REQUEST_ID =
  "(\\nRequest ID: (?<requestId>[-._~!$&'()*+,;=:@%a-zA-Z0-9]*))?";
const RESOURCES = `(\\nResources:(?<resources>(\\n- ${URI}?)+))?`;

const MESSAGE = `^${DOMAIN}${ADDRESS}${STATEMENT}${URI_LINE}${VERSION}${CHAIN_ID}${NONCE}${ISSUED_AT}${EXPIRATION_TIME}${NOT_BEFORE}${REQUEST_ID}${RESOURCES}$`;

export class ParsedMessageRegExp {
  domain: string;
  address: string;
  statement: string | null;
  uri: string;
  version: string;
  chainId: number;
  nonce: string;
  issuedAt: string;
  expirationTime: string | null;
  notBefore: string | null;
  requestId: string | null;
  resources: string[] | null;
  match?: RegExpExecArray;

  constructor(msg: string) {
    const REGEX = new RegExp(MESSAGE, 'g');

    const match = REGEX.exec(msg);
    if (!match) {
      throw new Error('Message did not match the regular expression.');
    }
    this.match = match;
    this.domain = match?.groups?.domain;

    if (this.domain.length === 0 || !/[^#?]*/.test(this.domain)) {
      throw new Error('Domain cannot be empty.');
    }

    this.address = match?.groups?.address;

    if (!isEIP55Address(this.address)) {
      throw new Error('Address not conformant to EIP-55.');
    }

    this.statement = match?.groups?.statement;
    this.uri = match?.groups?.uri;

    if (!isValidURL(this.uri)) {
      throw new Error('Invalid URI.');
    }

    this.version = match?.groups?.version;
    this.nonce = match?.groups?.nonce;
    this.chainId = parseInt(match?.groups?.chainId);
    this.issuedAt = match?.groups?.issuedAt;
    this.expirationTime = match?.groups?.expirationTime;
    this.notBefore = match?.groups?.notBefore;
    this.requestId = match?.groups?.requestId;
    this.resources = match?.groups?.resources?.split('\n- ').slice(1);

    if (this.resources?.length > 0) {
      this.resources.forEach((r) => {
        if (!uri.isUri(r)) {
          throw new Error(`${r} is not a valid resource.`);
        }
      });
    }
  }
}
