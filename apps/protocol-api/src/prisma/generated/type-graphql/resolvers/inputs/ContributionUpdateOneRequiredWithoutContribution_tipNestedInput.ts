import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutContribution_tipInput } from "../inputs/ContributionCreateOrConnectWithoutContribution_tipInput";
import { ContributionCreateWithoutContribution_tipInput } from "../inputs/ContributionCreateWithoutContribution_tipInput";
import { ContributionUpdateWithoutContribution_tipInput } from "../inputs/ContributionUpdateWithoutContribution_tipInput";
import { ContributionUpsertWithoutContribution_tipInput } from "../inputs/ContributionUpsertWithoutContribution_tipInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateOneRequiredWithoutContribution_tipNestedInput", {
  isAbstract: true
})
export class ContributionUpdateOneRequiredWithoutContribution_tipNestedInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutContribution_tipInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutContribution_tipInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutContribution_tipInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutContribution_tipInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutContribution_tipInput, {
    nullable: true
  })
  upsert?: ContributionUpsertWithoutContribution_tipInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutContribution_tipInput, {
    nullable: true
  })
  update?: ContributionUpdateWithoutContribution_tipInput | undefined;
}
