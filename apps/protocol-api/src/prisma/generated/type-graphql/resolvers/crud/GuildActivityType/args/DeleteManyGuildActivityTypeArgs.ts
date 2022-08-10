import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildActivityTypeWhereInput } from "../../../inputs/GuildActivityTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true
  })
  where?: GuildActivityTypeWhereInput | undefined;
}
