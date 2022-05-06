import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CategoryActivityType } from "../models/CategoryActivityType";
import { CategoryActivityCount } from "../resolvers/outputs/CategoryActivityCount";

@TypeGraphQL.ObjectType("CategoryActivity", {
  isAbstract: true
})
export class CategoryActivity {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  activityTypes?: CategoryActivityType[];

  @TypeGraphQL.Field(_type => CategoryActivityCount, {
    nullable: true
  })
  _count?: CategoryActivityCount | null;
}
