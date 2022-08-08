import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerUpdateWithoutUserInput } from "../inputs/PartnerUpdateWithoutUserInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PartnerUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PartnerUpdateWithoutUserInput;
}
