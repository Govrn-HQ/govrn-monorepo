import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutMembershipStatusInput } from "../inputs/GuildUserCreateWithoutMembershipStatusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateOrConnectWithoutMembershipStatusInput", {
  isAbstract: true
})
export class GuildUserCreateOrConnectWithoutMembershipStatusInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutMembershipStatusInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutMembershipStatusInput;
}
