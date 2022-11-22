import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserWhereInput } from "../inputs/TwitterUserWhereInput";

@TypeGraphQL.InputType("TwitterUserListRelationFilter", {
  isAbstract: true
})
export class TwitterUserListRelationFilter {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  every?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  some?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  none?: TwitterUserWhereInput | undefined;
}
