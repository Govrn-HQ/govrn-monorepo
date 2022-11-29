import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountWhereInput } from "../inputs/TwitterAccountWhereInput";

@TypeGraphQL.InputType("TwitterAccountListRelationFilter", {
  isAbstract: true
})
export class TwitterAccountListRelationFilter {
  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true
  })
  every?: TwitterAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true
  })
  some?: TwitterAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true
  })
  none?: TwitterAccountWhereInput | undefined;
}
