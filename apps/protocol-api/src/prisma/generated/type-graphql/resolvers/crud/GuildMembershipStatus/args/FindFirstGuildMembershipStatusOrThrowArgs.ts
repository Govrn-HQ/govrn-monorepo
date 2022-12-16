import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusOrderByWithRelationInput } from "../../../inputs/GuildMembershipStatusOrderByWithRelationInput";
import { GuildMembershipStatusWhereInput } from "../../../inputs/GuildMembershipStatusWhereInput";
import { GuildMembershipStatusWhereUniqueInput } from "../../../inputs/GuildMembershipStatusWhereUniqueInput";
import { GuildMembershipStatusScalarFieldEnum } from "../../../../enums/GuildMembershipStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGuildMembershipStatusOrThrowArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereInput, {
    nullable: true
  })
  where?: GuildMembershipStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildMembershipStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildMembershipStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildMembershipStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuildMembershipStatusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name"> | undefined;
}
