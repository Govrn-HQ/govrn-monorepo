import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUpdateManyMutationInput } from "../../../inputs/GuildUpdateManyMutationInput";
import { GuildWhereInput } from "../../../inputs/GuildWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildArgs {
  @TypeGraphQL.Field(_type => GuildUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  where?: GuildWhereInput | undefined;
}
