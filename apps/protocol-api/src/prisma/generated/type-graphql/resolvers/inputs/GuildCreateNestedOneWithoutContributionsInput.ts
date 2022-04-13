import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutContributionsInput } from "../inputs/GuildCreateOrConnectWithoutContributionsInput";
import { GuildCreateWithoutContributionsInput } from "../inputs/GuildCreateWithoutContributionsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutContributionsInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutContributionsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
