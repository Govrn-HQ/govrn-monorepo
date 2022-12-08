import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusCreateInput } from "../../../inputs/GuildVerificationStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateInput, {
    nullable: false
  })
  data!: GuildVerificationStatusCreateInput;
}
