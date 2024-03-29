import { BigInt } from '@graphprotocol/graph-ts';
import { Govrn, Attest, Mint } from '../generated/Govrn/Govrn';
import { Attestation, Contribution } from '../generated/schema';

export function handleAttest(event: Attest): void {
  let entity = Attestation.load(
    `${event.params.attestor.toHex()}-${event.params.contribution.toHex()}`,
  );

  if (!entity) {
    entity = new Attestation(
      `${event.params.attestor.toHex()}-${event.params.contribution.toHex()}`,
    );
  }

  entity.attestor = event.params.attestor;
  entity.confidence = event.params.confidence;
  entity.contribution = event.params.contribution.toHex();
  entity.txHash = event.transaction.hash;
  entity.createdAt = event.block.timestamp;

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
  entity.txHash = event.transaction.hash;
  entity.createdAt = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}
