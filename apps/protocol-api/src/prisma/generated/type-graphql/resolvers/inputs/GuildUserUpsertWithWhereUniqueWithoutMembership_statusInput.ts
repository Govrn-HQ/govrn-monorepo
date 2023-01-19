import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutMembership_statusInput } from "../inputs/GuildUserCreateWithoutMembership_statusInput";
import { GuildUserUpdateWithoutMembership_statusInput } from "../inputs/GuildUserUpdateWithoutMembership_statusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpsertWithWhereUniqueWithoutMembership_statusInput", {
  isAbstract: true
})
export class GuildUserUpsertWithWhereUniqueWithoutMembership_statusInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutMembership_statusInput, {
    nullable: false
  })
  update!: GuildUserUpdateWithoutMembership_statusInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutMembership_statusInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutMembership_statusInput;
}
