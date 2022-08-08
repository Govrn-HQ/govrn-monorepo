import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUserUpdateManyMutationInput } from "../../../inputs/GuildUserUpdateManyMutationInput";
import { GuildUserWhereInput } from "../../../inputs/GuildUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true
  })
  where?: GuildUserWhereInput | undefined;
}
