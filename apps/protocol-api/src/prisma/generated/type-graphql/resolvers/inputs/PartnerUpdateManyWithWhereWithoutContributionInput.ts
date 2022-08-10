import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerScalarWhereInput } from "../inputs/PartnerScalarWhereInput";
import { PartnerUpdateManyMutationInput } from "../inputs/PartnerUpdateManyMutationInput";

@TypeGraphQL.InputType("PartnerUpdateManyWithWhereWithoutContributionInput", {
  isAbstract: true
})
export class PartnerUpdateManyWithWhereWithoutContributionInput {
  @TypeGraphQL.Field(_type => PartnerScalarWhereInput, {
    nullable: false
  })
  where!: PartnerScalarWhereInput;

  @TypeGraphQL.Field(_type => PartnerUpdateManyMutationInput, {
    nullable: false
  })
  data!: PartnerUpdateManyMutationInput;
}
