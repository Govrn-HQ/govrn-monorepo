import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutContributionsInput } from "../inputs/ChainCreateOrConnectWithoutContributionsInput";
import { ChainCreateWithoutContributionsInput } from "../inputs/ChainCreateWithoutContributionsInput";
import { ChainUpdateWithoutContributionsInput } from "../inputs/ChainUpdateWithoutContributionsInput";
import { ChainUpsertWithoutContributionsInput } from "../inputs/ChainUpsertWithoutContributionsInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainUpdateOneWithoutContributionsInput", {
  isAbstract: true
})
export class ChainUpdateOneWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: ChainCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpsertWithoutContributionsInput, {
    nullable: true
  })
  upsert?: ChainUpsertWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateWithoutContributionsInput, {
    nullable: true
  })
  update?: ChainUpdateWithoutContributionsInput | undefined;
}
