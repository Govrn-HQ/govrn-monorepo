import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildImportRelationFilter } from "../inputs/GuildImportRelationFilter";
import { GuildMembershipStatusRelationFilter } from "../inputs/GuildMembershipStatusRelationFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("GuildUserWhereInput", {
  isAbstract: true
})
export class GuildUserWhereInput {
  @TypeGraphQL.Field(_type => [GuildUserWhereInput], {
    nullable: true
  })
  AND?: GuildUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereInput], {
    nullable: true
  })
  OR?: GuildUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereInput], {
    nullable: true
  })
  NOT?: GuildUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  membership_status_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusRelationFilter, {
    nullable: true
  })
  membershipStatus?: GuildMembershipStatusRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  favorite?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  guild_import_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GuildImportRelationFilter, {
    nullable: true
  })
  guild_import?: GuildImportRelationFilter | undefined;
}
