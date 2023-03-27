import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingAvgAggregate } from "../outputs/VerificationSettingAvgAggregate";
import { VerificationSettingCountAggregate } from "../outputs/VerificationSettingCountAggregate";
import { VerificationSettingMaxAggregate } from "../outputs/VerificationSettingMaxAggregate";
import { VerificationSettingMinAggregate } from "../outputs/VerificationSettingMinAggregate";
import { VerificationSettingSumAggregate } from "../outputs/VerificationSettingSumAggregate";

@TypeGraphQL.ObjectType("AggregateVerificationSetting", {
  isAbstract: true
})
export class AggregateVerificationSetting {
  @TypeGraphQL.Field(_type => VerificationSettingCountAggregate, {
    nullable: true
  })
  _count!: VerificationSettingCountAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingAvgAggregate, {
    nullable: true
  })
  _avg!: VerificationSettingAvgAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingSumAggregate, {
    nullable: true
  })
  _sum!: VerificationSettingSumAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingMinAggregate, {
    nullable: true
  })
  _min!: VerificationSettingMinAggregate | null;

  @TypeGraphQL.Field(_type => VerificationSettingMaxAggregate, {
    nullable: true
  })
  _max!: VerificationSettingMaxAggregate | null;
}
