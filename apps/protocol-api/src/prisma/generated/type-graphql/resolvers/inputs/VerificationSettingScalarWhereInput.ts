import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("VerificationSettingScalarWhereInput", {
  isAbstract: true
})
export class VerificationSettingScalarWhereInput {
  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereInput], {
    nullable: true
  })
  AND?: VerificationSettingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereInput], {
    nullable: true
  })
  OR?: VerificationSettingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereInput], {
    nullable: true
  })
  NOT?: VerificationSettingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  guild_id?: IntNullableFilter | undefined;

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
