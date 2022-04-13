import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerWhereInput } from "../inputs/PartnerWhereInput";

@TypeGraphQL.InputType("PartnerListRelationFilter", {
  isAbstract: true
})
export class PartnerListRelationFilter {
  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true
  })
  every?: PartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true
  })
  some?: PartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true
  })
  none?: PartnerWhereInput | undefined;
}
