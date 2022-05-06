import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActivityType } from "../models/ActivityType";
import { CategoryActivity } from "../models/CategoryActivity";

@TypeGraphQL.ObjectType("CategoryActivityType", {
  isAbstract: true
})
export class CategoryActivityType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category_activity_id!: number;

  category_activity?: CategoryActivity;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  activity_type_id!: number;

  activity_type?: ActivityType;
}
