import * as TypeGraphQL from "type-graphql";

export enum AttestationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  confidence_id = "confidence_id",
  user_id = "user_id",
  contribution_id = "contribution_id",
  date_of_attestation = "date_of_attestation",
  attestation_status_id = "attestation_status_id"
}
TypeGraphQL.registerEnumType(AttestationScalarFieldEnum, {
  name: "AttestationScalarFieldEnum",
  description: undefined,
});
