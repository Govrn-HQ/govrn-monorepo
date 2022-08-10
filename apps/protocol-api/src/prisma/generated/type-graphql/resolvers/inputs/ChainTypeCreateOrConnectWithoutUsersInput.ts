import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainTypeCreateWithoutUsersInput } from "../inputs/ChainTypeCreateWithoutUsersInput";
import { ChainTypeWhereUniqueInput } from "../inputs/ChainTypeWhereUniqueInput";

@TypeGraphQL.InputType("ChainTypeCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class ChainTypeCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ChainTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainTypeCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ChainTypeCreateWithoutUsersInput;
}
