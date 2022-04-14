import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("LinearCycleMaxAggregate", {
  isAbstract: true
})
export class LinearCycleMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  number!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startsAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endsAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linear_id!: string | null;
}
