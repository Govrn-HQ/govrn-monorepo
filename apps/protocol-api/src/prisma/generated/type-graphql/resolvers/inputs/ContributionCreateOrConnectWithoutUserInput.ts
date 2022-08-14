import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutUserInput } from "../inputs/ContributionCreateWithoutUserInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ContributionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutUserInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutUserInput;
}
