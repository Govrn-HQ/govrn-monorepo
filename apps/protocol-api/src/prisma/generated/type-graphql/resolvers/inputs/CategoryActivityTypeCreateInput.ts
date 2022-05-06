import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutCategoryActivityInput } from "../inputs/ActivityTypeCreateNestedOneWithoutCategoryActivityInput";
import { CategoryActivityCreateNestedOneWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateNestedOneWithoutActivityTypesInput";

@TypeGraphQL.InputType("CategoryActivityTypeCreateInput", {
  isAbstract: true
})
export class CategoryActivityTypeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityCreateNestedOneWithoutActivityTypesInput, {
    nullable: false
  })
  category_activity!: CategoryActivityCreateNestedOneWithoutActivityTypesInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutCategoryActivityInput, {
    nullable: false
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutCategoryActivityInput;
}
