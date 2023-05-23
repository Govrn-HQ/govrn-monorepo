import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationUpdateManyMutationInput } from "../../../inputs/GuildTwitterIntegrationUpdateManyMutationInput";
import { GuildTwitterIntegrationWhereInput } from "../../../inputs/GuildTwitterIntegrationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildTwitterIntegrationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereInput, {
    nullable: true
  })
  where?: GuildTwitterIntegrationWhereInput | undefined;
}
