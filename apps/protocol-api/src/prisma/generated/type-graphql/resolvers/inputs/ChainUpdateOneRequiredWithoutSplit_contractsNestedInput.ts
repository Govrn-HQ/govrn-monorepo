import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutSplit_contractsInput } from "../inputs/ChainCreateOrConnectWithoutSplit_contractsInput";
import { ChainCreateWithoutSplit_contractsInput } from "../inputs/ChainCreateWithoutSplit_contractsInput";
import { ChainUpdateWithoutSplit_contractsInput } from "../inputs/ChainUpdateWithoutSplit_contractsInput";
import { ChainUpsertWithoutSplit_contractsInput } from "../inputs/ChainUpsertWithoutSplit_contractsInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainUpdateOneRequiredWithoutSplit_contractsNestedInput", {
  isAbstract: true
})
export class ChainUpdateOneRequiredWithoutSplit_contractsNestedInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutSplit_contractsInput, {
    nullable: true
  })
  create?: ChainCreateWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutSplit_contractsInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpsertWithoutSplit_contractsInput, {
    nullable: true
  })
  upsert?: ChainUpsertWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateWithoutSplit_contractsInput, {
    nullable: true
  })
  update?: ChainUpdateWithoutSplit_contractsInput | undefined;
}
