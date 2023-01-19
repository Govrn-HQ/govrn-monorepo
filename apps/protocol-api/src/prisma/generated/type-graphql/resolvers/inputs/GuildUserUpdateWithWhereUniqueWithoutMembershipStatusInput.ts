import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserUpdateWithoutMembershipStatusInput } from "../inputs/GuildUserUpdateWithoutMembershipStatusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput", {
  isAbstract: true
})
export class GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutMembershipStatusInput, {
    nullable: false
  })
  data!: GuildUserUpdateWithoutMembershipStatusInput;
}
