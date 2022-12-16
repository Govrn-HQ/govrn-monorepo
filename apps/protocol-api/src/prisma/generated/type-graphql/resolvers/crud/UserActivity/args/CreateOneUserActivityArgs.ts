import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserActivityCreateInput } from "../../../inputs/UserActivityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityCreateInput, {
    nullable: false
  })
  data!: UserActivityCreateInput;
}
