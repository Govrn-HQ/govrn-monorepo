import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsAvgAggregate } from "../outputs/VerificationSettingsAvgAggregate";
import { VerificationSettingsCountAggregate } from "../outputs/VerificationSettingsCountAggregate";
import { VerificationSettingsMaxAggregate } from "../outputs/VerificationSettingsMaxAggregate";
import { VerificationSettingsMinAggregate } from "../outputs/VerificationSettingsMinAggregate";
import { VerificationSettingsSumAggregate } from "../outputs/VerificationSettingsSumAggregate";

@TypeGraphQL.ObjectType("VerificationSettingsGroupBy", {
  isAbstract: true
})
export class VerificationSettingsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  guild_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  num_of_attestations!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => VerificationSettingsCountAggregate, {
    nullable: true
  })
  _count!: VerificationSettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingsAvgAggregate, {
    nullable: true
  })
  _avg!: VerificationSettingsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingsSumAggregate, {
    nullable: true
  })
  _sum!: VerificationSettingsSumAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingsMinAggregate, {
    nullable: true
  })
  _min!: VerificationSettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingsMaxAggregate, {
    nullable: true
  })
  _max!: VerificationSettingsMaxAggregate | null;
}
