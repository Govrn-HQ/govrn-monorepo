import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedManyWithoutCategory_activityInput } from "../inputs/ActivityTypeCreateNestedManyWithoutCategory_activityInput";

@TypeGraphQL.InputType("CategoryActivityCreateInput", {
  isAbstract: true
})
export class CategoryActivityCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedManyWithoutCategory_activityInput, {
    nullable: true
  })
  activityTypes?: ActivityTypeCreateNestedManyWithoutCategory_activityInput | undefined;
}
