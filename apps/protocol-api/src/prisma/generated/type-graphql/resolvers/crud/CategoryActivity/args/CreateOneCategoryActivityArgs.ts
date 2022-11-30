import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityCreateInput } from "../../../inputs/CategoryActivityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityCreateInput, {
    nullable: false
  })
  data!: CategoryActivityCreateInput;
}
