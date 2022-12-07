import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildMembershipStatusWhereInput", {
  isAbstract: true
})
export class GuildMembershipStatusWhereInput {
  @TypeGraphQL.Field(_type => [GuildMembershipStatusWhereInput], {
    nullable: true
  })
  AND?: GuildMembershipStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildMembershipStatusWhereInput], {
    nullable: true
  })
  OR?: GuildMembershipStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildMembershipStatusWhereInput], {
    nullable: true
  })
  NOT?: GuildMembershipStatusWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
