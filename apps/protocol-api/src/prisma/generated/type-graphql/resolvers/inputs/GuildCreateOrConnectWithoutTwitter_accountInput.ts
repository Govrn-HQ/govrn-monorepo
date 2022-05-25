import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutTwitter_accountInput } from "../inputs/GuildCreateWithoutTwitter_accountInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutTwitter_accountInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutTwitter_accountInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountInput, {
    nullable: false
  })
  create!: GuildCreateWithoutTwitter_accountInput;
}
