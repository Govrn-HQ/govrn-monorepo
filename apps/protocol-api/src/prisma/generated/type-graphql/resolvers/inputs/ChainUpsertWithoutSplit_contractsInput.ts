import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutSplit_contractsInput } from "../inputs/ChainCreateWithoutSplit_contractsInput";
import { ChainUpdateWithoutSplit_contractsInput } from "../inputs/ChainUpdateWithoutSplit_contractsInput";

@TypeGraphQL.InputType("ChainUpsertWithoutSplit_contractsInput", {
  isAbstract: true
})
export class ChainUpsertWithoutSplit_contractsInput {
  @TypeGraphQL.Field(_type => ChainUpdateWithoutSplit_contractsInput, {
    nullable: false
  })
  update!: ChainUpdateWithoutSplit_contractsInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutSplit_contractsInput, {
    nullable: false
  })
  create!: ChainCreateWithoutSplit_contractsInput;
}
