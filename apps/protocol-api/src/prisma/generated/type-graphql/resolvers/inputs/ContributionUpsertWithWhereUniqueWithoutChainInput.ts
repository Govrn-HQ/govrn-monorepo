import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutChainInput } from "../inputs/ContributionCreateWithoutChainInput";
import { ContributionUpdateWithoutChainInput } from "../inputs/ContributionUpdateWithoutChainInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpsertWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class ContributionUpsertWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutChainInput, {
    nullable: false
  })
  update!: ContributionUpdateWithoutChainInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutChainInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutChainInput;
}
