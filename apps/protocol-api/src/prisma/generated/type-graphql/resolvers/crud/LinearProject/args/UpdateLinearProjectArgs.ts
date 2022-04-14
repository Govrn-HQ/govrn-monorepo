import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearProjectUpdateInput } from "../../../inputs/LinearProjectUpdateInput";
import { LinearProjectWhereUniqueInput } from "../../../inputs/LinearProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectUpdateInput, {
    nullable: false
  })
  data!: LinearProjectUpdateInput;

  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: false
  })
  where!: LinearProjectWhereUniqueInput;
}
