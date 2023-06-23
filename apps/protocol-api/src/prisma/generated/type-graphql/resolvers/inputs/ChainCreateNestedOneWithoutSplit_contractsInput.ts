import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutSplit_contractsInput } from "../inputs/ChainCreateOrConnectWithoutSplit_contractsInput";
import { ChainCreateWithoutSplit_contractsInput } from "../inputs/ChainCreateWithoutSplit_contractsInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateNestedOneWithoutSplit_contractsInput", {
  isAbstract: true
})
export class ChainCreateNestedOneWithoutSplit_contractsInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutSplit_contractsInput, {
    nullable: true
  })
  create?: ChainCreateWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutSplit_contractsInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;
}
