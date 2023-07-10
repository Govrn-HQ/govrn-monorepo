import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractUpdateWithoutUserInput } from "../inputs/UserSplitContractUpdateWithoutUserInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserSplitContractUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserSplitContractUpdateWithoutUserInput;
}
