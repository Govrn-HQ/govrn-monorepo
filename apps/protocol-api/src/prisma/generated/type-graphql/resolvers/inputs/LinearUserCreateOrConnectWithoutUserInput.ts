import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateWithoutUserInput } from "../inputs/LinearUserCreateWithoutUserInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class LinearUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: LinearUserCreateWithoutUserInput;
}
