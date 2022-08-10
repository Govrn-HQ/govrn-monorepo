import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutGuild_usersInput } from "../inputs/UserCreateNestedOneWithoutGuild_usersInput";

@TypeGraphQL.InputType("GuildUserCreateWithoutGuildInput", {
  isAbstract: true
})
export class GuildUserCreateWithoutGuildInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutGuild_usersInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutGuild_usersInput;
}
