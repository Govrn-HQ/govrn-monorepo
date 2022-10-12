import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutContributionsInput } from "../inputs/ChainCreateOrConnectWithoutContributionsInput";
import { ChainCreateWithoutContributionsInput } from "../inputs/ChainCreateWithoutContributionsInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateNestedOneWithoutContributionsInput", {
  isAbstract: true
})
export class ChainCreateNestedOneWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: ChainCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;
}
