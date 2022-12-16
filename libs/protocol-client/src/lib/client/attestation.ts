import { BaseClient } from './base';
import {
  BulkCreateAttestationMutationVariables,
  CreateAttestationMutationVariables,
  ListAttestationsQueryVariables,
  UpdateAttestationMutationVariables,
  UpsertAttestationMutationVariables,
} from '../protocol-types';

export class Attestation extends BaseClient {
  public async create(args: CreateAttestationMutationVariables) {
    const contributions = await this.sdk.createAttestation(args);
    return contributions.createOneAttestation;
  }

  public async bulkCreate(args: BulkCreateAttestationMutationVariables) {
    return await this.sdk.bulkCreateAttestation(args);
  }

  public async update(args: UpdateAttestationMutationVariables) {
    const contributions = await this.sdk.updateAttestation(args);
    return contributions.updateOneAttestation;
  }

  public async upsert(args: UpsertAttestationMutationVariables) {
    return await this.sdk.upsertAttestation(args);
  }

  public async list(args: ListAttestationsQueryVariables) {
    const contributions = await this.sdk.listAttestations(args);
    return contributions.result;
  }
}
