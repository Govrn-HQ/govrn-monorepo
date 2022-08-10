import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearProjectWhereUniqueInput } from "../../../inputs/LinearProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: false
  })
  where!: LinearProjectWhereUniqueInput;
}
