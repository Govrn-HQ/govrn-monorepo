import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateWithoutChainInput } from "../inputs/ContributionUpdateWithoutChainInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class ContributionUpdateWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutChainInput, {
    nullable: false
  })
  data!: ContributionUpdateWithoutChainInput;
}
