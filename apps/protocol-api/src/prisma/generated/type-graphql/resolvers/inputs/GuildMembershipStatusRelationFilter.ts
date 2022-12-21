import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusWhereInput } from "../inputs/GuildMembershipStatusWhereInput";

@TypeGraphQL.InputType("GuildMembershipStatusRelationFilter", {
  isAbstract: true
})
export class GuildMembershipStatusRelationFilter {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereInput, {
    nullable: true
  })
  is?: GuildMembershipStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereInput, {
    nullable: true
  })
  isNot?: GuildMembershipStatusWhereInput | undefined;
}
