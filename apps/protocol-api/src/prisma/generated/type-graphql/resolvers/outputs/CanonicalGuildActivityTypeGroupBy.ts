import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeAvgAggregate } from "../outputs/CanonicalGuildActivityTypeAvgAggregate";
import { CanonicalGuildActivityTypeCountAggregate } from "../outputs/CanonicalGuildActivityTypeCountAggregate";
import { CanonicalGuildActivityTypeMaxAggregate } from "../outputs/CanonicalGuildActivityTypeMaxAggregate";
import { CanonicalGuildActivityTypeMinAggregate } from "../outputs/CanonicalGuildActivityTypeMinAggregate";
import { CanonicalGuildActivityTypeSumAggregate } from "../outputs/CanonicalGuildActivityTypeSumAggregate";

@TypeGraphQL.ObjectType("CanonicalGuildActivityTypeGroupBy", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_activity_type_id!: number;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCountAggregate, {
    nullable: true
  })
  _count!: CanonicalGuildActivityTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeAvgAggregate, {
    nullable: true
  })
  _avg!: CanonicalGuildActivityTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeSumAggregate, {
    nullable: true
  })
  _sum!: CanonicalGuildActivityTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeMinAggregate, {
    nullable: true
  })
  _min!: CanonicalGuildActivityTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeMaxAggregate, {
    nullable: true
  })
  _max!: CanonicalGuildActivityTypeMaxAggregate | null;
}
