import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeCreateWithoutCategory_activityInput } from "../inputs/CategoryActivityTypeCreateWithoutCategory_activityInput";
import { CategoryActivityTypeUpdateWithoutCategory_activityInput } from "../inputs/CategoryActivityTypeUpdateWithoutCategory_activityInput";
import { CategoryActivityTypeWhereUniqueInput } from "../inputs/CategoryActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput", {
  isAbstract: true
})
export class CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateWithoutCategory_activityInput, {
    nullable: false
  })
  update!: CategoryActivityTypeUpdateWithoutCategory_activityInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeCreateWithoutCategory_activityInput, {
    nullable: false
  })
  create!: CategoryActivityTypeCreateWithoutCategory_activityInput;
}
