import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateNestedManyWithoutCycleInput } from "../inputs/LinearIssueCreateNestedManyWithoutCycleInput";

@TypeGraphQL.InputType("LinearCycleCreateInput", {
  isAbstract: true
})
export class LinearCycleCreateInput {
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

  @TypeGraphQL.Field(_type => LinearIssueCreateNestedManyWithoutCycleInput, {
    nullable: true
  })
  issues?: LinearIssueCreateNestedManyWithoutCycleInput | undefined;
}
