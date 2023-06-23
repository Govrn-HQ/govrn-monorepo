import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutSplit_contractsInput } from "../inputs/ChainCreateWithoutSplit_contractsInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateOrConnectWithoutSplit_contractsInput", {
  isAbstract: true
})
export class ChainCreateOrConnectWithoutSplit_contractsInput {
  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutSplit_contractsInput, {
    nullable: false
  })
  create!: ChainCreateWithoutSplit_contractsInput;
}
