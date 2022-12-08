import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusUpdateInput } from "../../../inputs/GuildVerificationStatusUpdateInput";
import { GuildVerificationStatusWhereUniqueInput } from "../../../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusUpdateInput, {
    nullable: false
  })
  data!: GuildVerificationStatusUpdateInput;

  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildVerificationStatusWhereUniqueInput;
}
