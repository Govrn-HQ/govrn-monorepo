import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceCreateNestedOneWithoutAttestationsInput } from "../inputs/AttestationConfidenceCreateNestedOneWithoutAttestationsInput";
import { ContributionCreateNestedOneWithoutAttestationsInput } from "../inputs/ContributionCreateNestedOneWithoutAttestationsInput";
import { UserCreateNestedOneWithoutAttestationsInput } from "../inputs/UserCreateNestedOneWithoutAttestationsInput";

@TypeGraphQL.InputType("AttestationCreateWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationCreateWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceCreateNestedOneWithoutAttestationsInput, {
    nullable: true
  })
  confidence?: AttestationConfidenceCreateNestedOneWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutAttestationsInput;
}
