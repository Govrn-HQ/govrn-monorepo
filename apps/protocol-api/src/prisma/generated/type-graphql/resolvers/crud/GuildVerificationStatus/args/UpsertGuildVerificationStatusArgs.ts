import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusCreateInput } from "../../../inputs/GuildVerificationStatusCreateInput";
import { GuildVerificationStatusUpdateInput } from "../../../inputs/GuildVerificationStatusUpdateInput";
import { GuildVerificationStatusWhereUniqueInput } from "../../../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildVerificationStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateInput, {
    nullable: false
  })
  create!: GuildVerificationStatusCreateInput;

  @TypeGraphQL.Field(_type => GuildVerificationStatusUpdateInput, {
    nullable: false
  })
  update!: GuildVerificationStatusUpdateInput;
}
