import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueUpdateManyWithoutTeamNestedInput } from "../inputs/LinearIssueUpdateManyWithoutTeamNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LinearTeamUpdateInput", {
  isAbstract: true
})
export class LinearTeamUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  linear_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  key?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpdateManyWithoutTeamNestedInput, {
    nullable: true
  })
  issues?: LinearIssueUpdateManyWithoutTeamNestedInput | undefined;
}
