import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildActivityTypeUpdateManyMutationInput } from "../../../inputs/GuildActivityTypeUpdateManyMutationInput";
import { GuildActivityTypeWhereInput } from "../../../inputs/GuildActivityTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildActivityTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true
  })
  where?: GuildActivityTypeWhereInput | undefined;
}
