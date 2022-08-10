import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("LinearCycleCreateManyInput", {
  isAbstract: true
})
export class LinearCycleCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startsAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endsAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;
}
