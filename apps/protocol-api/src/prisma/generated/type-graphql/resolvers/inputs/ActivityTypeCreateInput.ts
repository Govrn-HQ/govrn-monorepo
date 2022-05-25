import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeCreateNestedManyWithoutActivity_typeInput } from "../inputs/CategoryActivityTypeCreateNestedManyWithoutActivity_typeInput";
import { ContributionCreateNestedManyWithoutActivity_typeInput } from "../inputs/ContributionCreateNestedManyWithoutActivity_typeInput";
import { UserActivityCreateNestedManyWithoutActivity_typeInput } from "../inputs/UserActivityCreateNestedManyWithoutActivity_typeInput";

@TypeGraphQL.InputType("ActivityTypeCreateInput", {
  isAbstract: true
})
export class ActivityTypeCreateInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  default?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserActivityCreateNestedManyWithoutActivity_typeInput, {
    nullable: true
  })
  users?: UserActivityCreateNestedManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedManyWithoutActivity_typeInput, {
    nullable: true
  })
  contributions?: ContributionCreateNestedManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeCreateNestedManyWithoutActivity_typeInput, {
    nullable: true
  })
  categoryActivity?: CategoryActivityTypeCreateNestedManyWithoutActivity_typeInput | undefined;
}
