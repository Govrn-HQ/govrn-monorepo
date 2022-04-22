import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityCreateOrConnectWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateOrConnectWithoutActivityTypesInput";
import { CategoryActivityCreateWithoutActivityTypesInput } from "../inputs/CategoryActivityCreateWithoutActivityTypesInput";
import { CategoryActivityUpdateWithoutActivityTypesInput } from "../inputs/CategoryActivityUpdateWithoutActivityTypesInput";
import { CategoryActivityUpsertWithoutActivityTypesInput } from "../inputs/CategoryActivityUpsertWithoutActivityTypesInput";
import { CategoryActivityWhereUniqueInput } from "../inputs/CategoryActivityWhereUniqueInput";

@TypeGraphQL.InputType("CategoryActivityUpdateOneRequiredWithoutActivityTypesInput", {
  isAbstract: true
})
export class CategoryActivityUpdateOneRequiredWithoutActivityTypesInput {
  @TypeGraphQL.Field(_type => CategoryActivityCreateWithoutActivityTypesInput, {
    nullable: true
  })
  create?: CategoryActivityCreateWithoutActivityTypesInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityCreateOrConnectWithoutActivityTypesInput, {
    nullable: true
  })
  connectOrCreate?: CategoryActivityCreateOrConnectWithoutActivityTypesInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityUpsertWithoutActivityTypesInput, {
    nullable: true
  })
  upsert?: CategoryActivityUpsertWithoutActivityTypesInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityUpdateWithoutActivityTypesInput, {
    nullable: true
  })
  update?: CategoryActivityUpdateWithoutActivityTypesInput | undefined;
}
