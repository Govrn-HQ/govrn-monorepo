import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutMembership_statusInput } from "../inputs/GuildUserCreateWithoutMembership_statusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateOrConnectWithoutMembership_statusInput", {
  isAbstract: true
})
export class GuildUserCreateOrConnectWithoutMembership_statusInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutMembership_statusInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutMembership_statusInput;
}
