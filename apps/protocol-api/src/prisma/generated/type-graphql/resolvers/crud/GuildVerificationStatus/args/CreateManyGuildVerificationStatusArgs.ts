import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusCreateManyInput } from "../../../inputs/GuildVerificationStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => [GuildVerificationStatusCreateManyInput], {
    nullable: false
  })
  data!: GuildVerificationStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
