import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityCreateOrConnectWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateOrConnectWithoutActivityTypesInput";
import { CategoryActivityCreateWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateWithoutActivityTypesInput";
import { CategoryActivityWhereUniqueInput } from "../inputs/CategoryActivityWhereUniqueInput";

@TypeGraphQL.InputType("CategoryActivityCreateNestedOneWithoutActivityTypesInput", {
  isAbstract: true
})
export class CategoryActivityCreateNestedOneWithoutActivityTypesInput {
  @TypeGraphQL.Field(_type => CategoryActivityCreateWithoutActivityTypesInput, {
    nullable: true
  })
  create?: CategoryActivityCreateWithoutActivityTypesInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityCreateOrConnectWithoutActivityTypesInput, {
    nullable: true
  })
  connectOrCreate?: CategoryActivityCreateOrConnectWithoutActivityTypesInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryActivityWhereUniqueInput | undefined;
}
