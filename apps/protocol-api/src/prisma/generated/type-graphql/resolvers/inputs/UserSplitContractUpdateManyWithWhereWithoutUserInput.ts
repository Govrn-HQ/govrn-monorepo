import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractScalarWhereInput } from "../inputs/UserSplitContractScalarWhereInput";
import { UserSplitContractUpdateManyMutationInput } from "../inputs/UserSplitContractUpdateManyMutationInput";

@TypeGraphQL.InputType("UserSplitContractUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class UserSplitContractUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserSplitContractScalarWhereInput, {
    nullable: false
  })
  where!: UserSplitContractScalarWhereInput;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserSplitContractUpdateManyMutationInput;
}
