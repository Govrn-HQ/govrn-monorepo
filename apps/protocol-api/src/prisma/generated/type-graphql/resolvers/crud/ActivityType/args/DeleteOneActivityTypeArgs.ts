import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityTypeWhereUniqueInput } from "../../../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ActivityTypeWhereUniqueInput;
}
