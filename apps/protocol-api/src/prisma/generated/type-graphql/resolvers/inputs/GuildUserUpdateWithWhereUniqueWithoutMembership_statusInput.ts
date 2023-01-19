import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserUpdateWithoutMembership_statusInput } from "../inputs/GuildUserUpdateWithoutMembership_statusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateWithWhereUniqueWithoutMembership_statusInput", {
  isAbstract: true
})
export class GuildUserUpdateWithWhereUniqueWithoutMembership_statusInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutMembership_statusInput, {
    nullable: false
  })
  data!: GuildUserUpdateWithoutMembership_statusInput;
}
