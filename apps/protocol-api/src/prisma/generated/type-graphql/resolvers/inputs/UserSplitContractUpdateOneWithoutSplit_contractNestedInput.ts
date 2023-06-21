import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateOrConnectWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateOrConnectWithoutSplit_contractInput";
import { UserSplitContractCreateWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateWithoutSplit_contractInput";
import { UserSplitContractUpdateWithoutSplit_contractInput } from "../inputs/UserSplitContractUpdateWithoutSplit_contractInput";
import { UserSplitContractUpsertWithoutSplit_contractInput } from "../inputs/UserSplitContractUpsertWithoutSplit_contractInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractUpdateOneWithoutSplit_contractNestedInput", {
  isAbstract: true
})
export class UserSplitContractUpdateOneWithoutSplit_contractNestedInput {
  @TypeGraphQL.Field(_type => UserSplitContractCreateWithoutSplit_contractInput, {
    nullable: true
  })
  create?: UserSplitContractCreateWithoutSplit_contractInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCreateOrConnectWithoutSplit_contractInput, {
    nullable: true
  })
  connectOrCreate?: UserSplitContractCreateOrConnectWithoutSplit_contractInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractUpsertWithoutSplit_contractInput, {
    nullable: true
  })
  upsert?: UserSplitContractUpsertWithoutSplit_contractInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: true
  })
  connect?: UserSplitContractWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateWithoutSplit_contractInput, {
    nullable: true
  })
  update?: UserSplitContractUpdateWithoutSplit_contractInput | undefined;
}
