import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUserOrderByWithRelationInput } from "../../../inputs/GuildUserOrderByWithRelationInput";
import { GuildUserWhereInput } from "../../../inputs/GuildUserWhereInput";
import { GuildUserWhereUniqueInput } from "../../../inputs/GuildUserWhereUniqueInput";
import { GuildUserScalarFieldEnum } from "../../../../enums/GuildUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true
  })
  where?: GuildUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "user_id" | "guild_id" | "membership_status_id" | "favorite" | "guild_import_id"> | undefined;
}
