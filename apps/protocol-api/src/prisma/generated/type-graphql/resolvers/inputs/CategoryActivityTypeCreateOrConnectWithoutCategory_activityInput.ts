import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeCreateWithoutCategory_activityInput } from "../inputs/CategoryActivityTypeCreateWithoutCategory_activityInput";
import { CategoryActivityTypeWhereUniqueInput } from "../inputs/CategoryActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput", {
  isAbstract: true
})
export class CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeCreateWithoutCategory_activityInput, {
    nullable: false
  })
  create!: CategoryActivityTypeCreateWithoutCategory_activityInput;
}
