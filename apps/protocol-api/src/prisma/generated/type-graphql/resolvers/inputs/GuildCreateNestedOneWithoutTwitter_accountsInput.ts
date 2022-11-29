import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutTwitter_accountsInput } from "../inputs/GuildCreateOrConnectWithoutTwitter_accountsInput";
import { GuildCreateWithoutTwitter_accountsInput } from "../inputs/GuildCreateWithoutTwitter_accountsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutTwitter_accountsInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutTwitter_accountsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutTwitter_accountsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutTwitter_accountsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutTwitter_accountsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
