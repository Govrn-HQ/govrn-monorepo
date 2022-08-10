import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerCreateWithoutUserInput } from "../inputs/PartnerCreateWithoutUserInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PartnerCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerCreateWithoutUserInput, {
    nullable: false
  })
  create!: PartnerCreateWithoutUserInput;
}
