import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetWhereInput } from "../inputs/TwitterTweetWhereInput";

@TypeGraphQL.InputType("TwitterTweetRelationFilter", {
  isAbstract: true
})
export class TwitterTweetRelationFilter {
  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  is?: TwitterTweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  isNot?: TwitterTweetWhereInput | undefined;
}
