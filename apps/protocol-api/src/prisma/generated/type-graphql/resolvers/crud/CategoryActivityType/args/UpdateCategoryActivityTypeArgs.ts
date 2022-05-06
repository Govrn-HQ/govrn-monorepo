import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityTypeUpdateInput } from "../../../inputs/CategoryActivityTypeUpdateInput";
import { CategoryActivityTypeWhereUniqueInput } from "../../../inputs/CategoryActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateInput, {
    nullable: false
  })
  data!: CategoryActivityTypeUpdateInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityTypeWhereUniqueInput;
}
