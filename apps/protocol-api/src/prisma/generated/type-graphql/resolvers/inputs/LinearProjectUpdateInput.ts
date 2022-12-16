import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueUpdateManyWithoutProjectNestedInput } from "../inputs/LinearIssueUpdateManyWithoutProjectNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LinearProjectUpdateInput", {
  isAbstract: true
})
export class LinearProjectUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  linear_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpdateManyWithoutProjectNestedInput, {
    nullable: true
  })
  issues?: LinearIssueUpdateManyWithoutProjectNestedInput | undefined;
}
