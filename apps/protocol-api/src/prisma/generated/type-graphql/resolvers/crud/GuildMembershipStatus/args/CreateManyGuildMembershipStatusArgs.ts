import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusCreateManyInput } from "../../../inputs/GuildMembershipStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => [GuildMembershipStatusCreateManyInput], {
    nullable: false
  })
  data!: GuildMembershipStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
