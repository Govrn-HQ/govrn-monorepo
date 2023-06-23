import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateWithoutSplit_contractInput";
import { UserSplitContractUpdateWithoutSplit_contractInput } from "../inputs/UserSplitContractUpdateWithoutSplit_contractInput";

@TypeGraphQL.InputType("UserSplitContractUpsertWithoutSplit_contractInput", {
  isAbstract: true
})
export class UserSplitContractUpsertWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => UserSplitContractUpdateWithoutSplit_contractInput, {
    nullable: false
  })
  update!: UserSplitContractUpdateWithoutSplit_contractInput;

  @TypeGraphQL.Field(_type => UserSplitContractCreateWithoutSplit_contractInput, {
    nullable: false
  })
  create!: UserSplitContractCreateWithoutSplit_contractInput;
}
