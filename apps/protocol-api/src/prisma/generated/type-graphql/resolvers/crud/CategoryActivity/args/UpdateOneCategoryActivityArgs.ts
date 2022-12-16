import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityUpdateInput } from "../../../inputs/CategoryActivityUpdateInput";
import { CategoryActivityWhereUniqueInput } from "../../../inputs/CategoryActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityUpdateInput, {
    nullable: false
  })
  data!: CategoryActivityUpdateInput;

  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityWhereUniqueInput;
}
