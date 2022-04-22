import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityCreateNestedOneWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateNestedOneWithoutActivityTypesInput";
import { UserActivityCreateNestedManyWithoutActivity_typeInput } from "../inputs/UserActivityCreateNestedManyWithoutActivity_typeInput";

@TypeGraphQL.InputType("ActivityTypeCreateWithoutContributionsInput", {
  isAbstract: true
})
export class ActivityTypeCreateWithoutContributionsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityCreateNestedOneWithoutActivityTypesInput, {
    nullable: false
  })
  category_activity!: CategoryActivityCreateNestedOneWithoutActivityTypesInput;

  @TypeGraphQL.Field(_type => UserActivityCreateNestedManyWithoutActivity_typeInput, {
    nullable: true
  })
  users?: UserActivityCreateNestedManyWithoutActivity_typeInput | undefined;
}
