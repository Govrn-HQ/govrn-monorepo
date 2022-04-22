import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerCreateWithoutContributionInput } from "../inputs/PartnerCreateWithoutContributionInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerCreateOrConnectWithoutContributionInput", {
  isAbstract: true
})
export class PartnerCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerCreateWithoutContributionInput, {
    nullable: false
  })
  create!: PartnerCreateWithoutContributionInput;
}
