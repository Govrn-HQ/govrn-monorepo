import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerCreateWithoutContributionInput } from "../inputs/PartnerCreateWithoutContributionInput";
import { PartnerUpdateWithoutContributionInput } from "../inputs/PartnerUpdateWithoutContributionInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerUpsertWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class PartnerUpsertWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerUpdateWithoutContributionInput, {
    nullable: false
  })
  update!: PartnerUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => PartnerCreateWithoutContributionInput, {
    nullable: false
  })
  create!: PartnerCreateWithoutContributionInput;
}
