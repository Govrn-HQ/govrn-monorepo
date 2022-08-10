import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeCreateNestedManyWithoutCategory_activityInput } from "../inputs/CategoryActivityTypeCreateNestedManyWithoutCategory_activityInput";

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

  @TypeGraphQL.Field(_type => CategoryActivityTypeCreateNestedManyWithoutCategory_activityInput, {
    nullable: true
  })
  activityTypes?: CategoryActivityTypeCreateNestedManyWithoutCategory_activityInput | undefined;
}
