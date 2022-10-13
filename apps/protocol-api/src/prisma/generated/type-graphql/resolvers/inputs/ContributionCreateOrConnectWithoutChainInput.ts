import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutChainInput } from "../inputs/ContributionCreateWithoutChainInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateOrConnectWithoutChainInput", {
  isAbstract: true
})
export class ContributionCreateOrConnectWithoutChainInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutChainInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutChainInput;
}
