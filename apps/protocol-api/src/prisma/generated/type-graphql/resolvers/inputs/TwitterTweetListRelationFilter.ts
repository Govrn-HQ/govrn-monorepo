import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetWhereInput } from "../inputs/TwitterTweetWhereInput";

@TypeGraphQL.InputType("TwitterTweetListRelationFilter", {
  isAbstract: true
})
export class TwitterTweetListRelationFilter {
  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  every?: TwitterTweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  some?: TwitterTweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  none?: TwitterTweetWhereInput | undefined;
}
