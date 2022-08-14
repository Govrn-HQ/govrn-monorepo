import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutGuildInput } from "../inputs/GuildUserCreateWithoutGuildInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class GuildUserCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutGuildInput;
}
