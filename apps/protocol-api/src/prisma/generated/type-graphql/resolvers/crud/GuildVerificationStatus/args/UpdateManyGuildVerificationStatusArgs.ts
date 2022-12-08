import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusUpdateManyMutationInput } from "../../../inputs/GuildVerificationStatusUpdateManyMutationInput";
import { GuildVerificationStatusWhereInput } from "../../../inputs/GuildVerificationStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildVerificationStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildVerificationStatusWhereInput | undefined;
}
