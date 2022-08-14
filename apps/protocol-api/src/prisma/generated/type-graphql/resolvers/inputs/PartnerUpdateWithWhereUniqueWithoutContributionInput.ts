import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerUpdateWithoutContributionInput } from "../inputs/PartnerUpdateWithoutContributionInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerUpdateWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class PartnerUpdateWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerUpdateWithoutContributionInput, {
    nullable: false
  })
  data!: PartnerUpdateWithoutContributionInput;
}
