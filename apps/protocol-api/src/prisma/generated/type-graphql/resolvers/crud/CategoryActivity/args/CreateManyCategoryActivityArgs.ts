import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityCreateManyInput } from "../../../inputs/CategoryActivityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoryActivityArgs {
  @TypeGraphQL.Field(_type => [CategoryActivityCreateManyInput], {
    nullable: false
  })
  data!: CategoryActivityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
