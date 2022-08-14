import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeUpdateWithoutActivity_typeInput } from "../inputs/CategoryActivityTypeUpdateWithoutActivity_typeInput";
import { CategoryActivityTypeWhereUniqueInput } from "../inputs/CategoryActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput", {
  isAbstract: true
})
export class CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateWithoutActivity_typeInput, {
    nullable: false
  })
  data!: CategoryActivityTypeUpdateWithoutActivity_typeInput;
}
