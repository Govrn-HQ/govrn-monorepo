import { BigInt } from '@graphprotocol/graph-ts';
import { Govrn, Attest, Mint } from '../generated/Govrn/Govrn';
import { Attestation, Contribution } from '../generated/schema';

export function handleAttest(event: Attest): void {
  let entity = Attestation.load(
    `${event.params.attestor}-${event.params.contribution}`,
  );

  if (!entity) {
    entity = new Attestation(
      `${event.params.attestor}-${event.params.contribution}`,
    );
  }

  entity.attestor = event.params.attestor;
  entity.confidence = event.params.confidence;
  entity.contribution = event.params.contribution.toHex();

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleMint(event: Mint): void {
  let entity = Contribution.load(event.params.id.toHex());

  if (!entity) {
    entity = new Contribution(event.params.id.toHex());
  }

  entity.address = event.params.owner;
  entity.contributionId = event.params.id;

  // Entities can be written to the store with `.save()`
  entity.save();
}
