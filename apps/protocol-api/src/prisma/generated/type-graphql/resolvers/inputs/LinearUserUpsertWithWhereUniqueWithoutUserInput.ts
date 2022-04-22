import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateWithoutUserInput } from "../inputs/LinearUserCreateWithoutUserInput";
import { LinearUserUpdateWithoutUserInput } from "../inputs/LinearUserUpdateWithoutUserInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class LinearUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: LinearUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: LinearUserCreateWithoutUserInput;
}
