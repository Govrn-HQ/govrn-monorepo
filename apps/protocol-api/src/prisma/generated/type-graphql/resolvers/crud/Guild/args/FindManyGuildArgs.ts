import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildOrderByWithRelationInput } from "../../../inputs/GuildOrderByWithRelationInput";
import { GuildWhereInput } from "../../../inputs/GuildWhereInput";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";
import { GuildScalarFieldEnum } from "../../../../enums/GuildScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  where?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "discord_id" | "name" | "congrats_channel" | "logo" | "contribution_reporting_channel"> | undefined;
}
