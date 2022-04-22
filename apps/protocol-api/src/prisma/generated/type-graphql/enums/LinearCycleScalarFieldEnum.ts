import * as TypeGraphQL from "type-graphql";

export enum LinearCycleScalarFieldEnum {
  id = "id",
  number = "number",
  startsAt = "startsAt",
  endsAt = "endsAt",
  linear_id = "linear_id"
}
TypeGraphQL.registerEnumType(LinearCycleScalarFieldEnum, {
  name: "LinearCycleScalarFieldEnum",
  description: undefined,
});
