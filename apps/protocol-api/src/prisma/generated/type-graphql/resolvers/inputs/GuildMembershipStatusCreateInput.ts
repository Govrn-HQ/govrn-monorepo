import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateNestedManyWithoutMembership_statusInput } from "../inputs/GuildUserCreateNestedManyWithoutMembership_statusInput";

@TypeGraphQL.InputType("GuildMembershipStatusCreateInput", {
  isAbstract: true
})
export class GuildMembershipStatusCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GuildUserCreateNestedManyWithoutMembership_statusInput, {
    nullable: true
  })
  guildUsers?: GuildUserCreateNestedManyWithoutMembership_statusInput | undefined;
}
