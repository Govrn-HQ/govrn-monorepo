import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceCreateNestedOneWithoutAttestationsInput } from "../inputs/AttestationConfidenceCreateNestedOneWithoutAttestationsInput";
import { ContributionCreateNestedOneWithoutAttestationsInput } from "../inputs/ContributionCreateNestedOneWithoutAttestationsInput";

@TypeGraphQL.InputType("AttestationCreateWithoutUserInput", {
  isAbstract: true
})
export class AttestationCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  confidence!: AttestationConfidenceCreateNestedOneWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_of_attestation?: Date | undefined;
}
