import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutContributionsInput } from "../inputs/ChainCreateWithoutContributionsInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateOrConnectWithoutContributionsInput", {
  isAbstract: true
})
export class ChainCreateOrConnectWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutContributionsInput, {
    nullable: false
  })
  create!: ChainCreateWithoutContributionsInput;
}
