import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeWhereInput } from "../inputs/ActivityTypeWhereInput";

@TypeGraphQL.InputType("ActivityTypeListRelationFilter", {
  isAbstract: true
})
export class ActivityTypeListRelationFilter {
  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true
  })
  every?: ActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true
  })
  some?: ActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true
  })
  none?: ActivityTypeWhereInput | undefined;
}
