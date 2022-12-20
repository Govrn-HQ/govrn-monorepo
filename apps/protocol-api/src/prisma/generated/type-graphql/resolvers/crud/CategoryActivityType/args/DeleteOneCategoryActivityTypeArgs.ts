import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityTypeWhereUniqueInput } from "../../../inputs/CategoryActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityTypeWhereUniqueInput;
}
