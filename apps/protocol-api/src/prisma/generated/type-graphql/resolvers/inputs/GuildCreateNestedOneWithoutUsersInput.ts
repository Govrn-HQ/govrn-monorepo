import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutUsersInput } from "../inputs/GuildCreateOrConnectWithoutUsersInput";
import { GuildCreateWithoutUsersInput } from "../inputs/GuildCreateWithoutUsersInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutUsersInput, {
    nullable: true
  })
  create?: GuildCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
