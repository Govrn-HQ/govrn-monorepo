import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerCreateWithoutUserInput } from "../inputs/PartnerCreateWithoutUserInput";
import { PartnerUpdateWithoutUserInput } from "../inputs/PartnerUpdateWithoutUserInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PartnerUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PartnerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PartnerCreateWithoutUserInput, {
    nullable: false
  })
  create!: PartnerCreateWithoutUserInput;
}
