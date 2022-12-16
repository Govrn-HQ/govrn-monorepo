import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutMembershipStatusInput } from "../inputs/GuildUserCreateWithoutMembershipStatusInput";
import { GuildUserUpdateWithoutMembershipStatusInput } from "../inputs/GuildUserUpdateWithoutMembershipStatusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput", {
  isAbstract: true
})
export class GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutMembershipStatusInput, {
    nullable: false
  })
  update!: GuildUserUpdateWithoutMembershipStatusInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutMembershipStatusInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutMembershipStatusInput;
}
