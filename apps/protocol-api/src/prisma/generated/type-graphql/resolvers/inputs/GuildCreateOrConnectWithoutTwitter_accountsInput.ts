import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutTwitter_accountsInput } from "../inputs/GuildCreateWithoutTwitter_accountsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutTwitter_accountsInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutTwitter_accountsInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutTwitter_accountsInput;
}
