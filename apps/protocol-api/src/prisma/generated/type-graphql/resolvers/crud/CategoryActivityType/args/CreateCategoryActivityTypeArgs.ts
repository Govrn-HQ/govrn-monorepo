import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityTypeCreateInput } from "../../../inputs/CategoryActivityTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeCreateInput, {
    nullable: false
  })
  data!: CategoryActivityTypeCreateInput;
}
