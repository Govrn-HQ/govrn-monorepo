import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserWhereInput } from "../inputs/TwitterUserWhereInput";

@TypeGraphQL.InputType("TwitterUserRelationFilter", {
  isAbstract: true
})
export class TwitterUserRelationFilter {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  is?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  isNot?: TwitterUserWhereInput | undefined;
}
