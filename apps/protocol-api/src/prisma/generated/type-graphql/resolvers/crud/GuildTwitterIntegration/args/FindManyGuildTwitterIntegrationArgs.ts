import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationOrderByWithRelationInput } from "../../../inputs/GuildTwitterIntegrationOrderByWithRelationInput";
import { GuildTwitterIntegrationWhereInput } from "../../../inputs/GuildTwitterIntegrationWhereInput";
import { GuildTwitterIntegrationWhereUniqueInput } from "../../../inputs/GuildTwitterIntegrationWhereUniqueInput";
import { GuildTwitterIntegrationScalarFieldEnum } from "../../../../enums/GuildTwitterIntegrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereInput, {
    nullable: true
  })
  where?: GuildTwitterIntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildTwitterIntegrationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildTwitterIntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "guild_id" | "hashtag"> | undefined;
}
