import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityWhereUniqueInput } from "../../../inputs/CategoryActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityWhereUniqueInput;
}
