import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityWhereInput } from "../inputs/UserActivityWhereInput";

@TypeGraphQL.InputType("UserActivityListRelationFilter", {
  isAbstract: true
})
export class UserActivityListRelationFilter {
  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true
  })
  every?: UserActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true
  })
  some?: UserActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true
  })
  none?: UserActivityWhereInput | undefined;
}
