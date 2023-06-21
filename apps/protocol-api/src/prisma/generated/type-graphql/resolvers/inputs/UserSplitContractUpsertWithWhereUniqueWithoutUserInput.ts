import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateWithoutUserInput } from "../inputs/UserSplitContractCreateWithoutUserInput";
import { UserSplitContractUpdateWithoutUserInput } from "../inputs/UserSplitContractUpdateWithoutUserInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserSplitContractUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserSplitContractUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserSplitContractCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserSplitContractCreateWithoutUserInput;
}
