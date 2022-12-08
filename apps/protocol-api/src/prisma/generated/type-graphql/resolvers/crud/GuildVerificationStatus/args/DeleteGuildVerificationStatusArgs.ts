import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusWhereUniqueInput } from "../../../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildVerificationStatusWhereUniqueInput;
}
