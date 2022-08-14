import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutConfidenceInput } from "../inputs/AttestationCreateWithoutConfidenceInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateOrConnectWithoutConfidenceInput", {
  isAbstract: true
})
export class AttestationCreateOrConnectWithoutConfidenceInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutConfidenceInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutConfidenceInput;
}
