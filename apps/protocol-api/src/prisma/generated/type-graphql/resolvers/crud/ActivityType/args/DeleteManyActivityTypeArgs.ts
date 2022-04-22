import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityTypeWhereInput } from "../../../inputs/ActivityTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true
  })
  where?: ActivityTypeWhereInput | undefined;
}
