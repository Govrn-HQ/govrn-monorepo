import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutContribution_tipInput } from "../inputs/ContributionCreateOrConnectWithoutContribution_tipInput";
import { ContributionCreateWithoutContribution_tipInput } from "../inputs/ContributionCreateWithoutContribution_tipInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedOneWithoutContribution_tipInput", {
  isAbstract: true
})
export class ContributionCreateNestedOneWithoutContribution_tipInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutContribution_tipInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutContribution_tipInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutContribution_tipInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutContribution_tipInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;
}
