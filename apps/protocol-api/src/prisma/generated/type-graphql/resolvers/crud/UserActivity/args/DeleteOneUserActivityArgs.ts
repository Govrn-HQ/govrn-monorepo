import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserActivityWhereUniqueInput } from "../../../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false
  })
  where!: UserActivityWhereUniqueInput;
}
