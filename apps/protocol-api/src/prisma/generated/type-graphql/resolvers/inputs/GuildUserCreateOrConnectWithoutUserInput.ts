import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutUserInput } from "../inputs/GuildUserCreateWithoutUserInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class GuildUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutUserInput;
}
