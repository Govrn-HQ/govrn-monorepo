import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutTwitter_accountInput } from "../inputs/GuildCreateOrConnectWithoutTwitter_accountInput";
import { GuildCreateWithoutTwitter_accountInput } from "../inputs/GuildCreateWithoutTwitter_accountInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutTwitter_accountInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutTwitter_accountInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountInput, {
    nullable: true
  })
  create?: GuildCreateWithoutTwitter_accountInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutTwitter_accountInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutTwitter_accountInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
