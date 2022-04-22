import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityCreateWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateWithoutActivityTypesInput";
import { CategoryActivityWhereUniqueInput } from "../inputs/CategoryActivityWhereUniqueInput";

@TypeGraphQL.InputType("CategoryActivityCreateOrConnectWithoutActivityTypesInput", {
  isAbstract: true
})
export class CategoryActivityCreateOrConnectWithoutActivityTypesInput {
  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryActivityCreateWithoutActivityTypesInput, {
    nullable: false
  })
  create!: CategoryActivityCreateWithoutActivityTypesInput;
}
