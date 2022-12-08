import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusWhereInput } from "../../../inputs/GuildVerificationStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildVerificationStatusWhereInput | undefined;
}
