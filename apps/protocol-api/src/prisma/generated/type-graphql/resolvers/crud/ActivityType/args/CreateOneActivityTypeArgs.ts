import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityTypeCreateInput } from "../../../inputs/ActivityTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeCreateInput, {
    nullable: false
  })
  data!: ActivityTypeCreateInput;
}
