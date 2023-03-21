import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("VerificationSettingWhereInput", {
  isAbstract: true
})
export class VerificationSettingWhereInput {
  @TypeGraphQL.Field(_type => [VerificationSettingWhereInput], {
    nullable: true
  })
  AND?: VerificationSettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereInput], {
    nullable: true
  })
  OR?: VerificationSettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereInput], {
    nullable: true
  })
  NOT?: VerificationSettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  guild_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  num_of_attestations?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
