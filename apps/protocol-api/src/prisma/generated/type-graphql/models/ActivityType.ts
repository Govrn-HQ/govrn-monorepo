import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CategoryActivityType } from "../models/CategoryActivityType";
import { Contribution } from "../models/Contribution";
import { UserActivity } from "../models/UserActivity";
import { ActivityTypeCount } from "../resolvers/outputs/ActivityTypeCount";

@TypeGraphQL.ObjectType("ActivityType", {
  isAbstract: true
})
export class ActivityType {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  users?: UserActivity[];

  contributions?: Contribution[];

  categoryActivity?: CategoryActivityType[];

  @TypeGraphQL.Field(_type => ActivityTypeCount, {
    nullable: true
  })
  _count?: ActivityTypeCount | null;
}
