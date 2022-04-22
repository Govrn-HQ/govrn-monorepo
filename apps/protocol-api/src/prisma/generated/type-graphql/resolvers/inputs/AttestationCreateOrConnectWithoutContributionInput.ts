import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutContributionInput } from "../inputs/AttestationCreateWithoutContributionInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateOrConnectWithoutContributionInput", {
  isAbstract: true
})
export class AttestationCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutContributionInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutContributionInput;
}
