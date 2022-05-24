import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateNestedManyWithoutUserInput } from "../inputs/AttestationCreateNestedManyWithoutUserInput";
import { ChainTypeCreateNestedOneWithoutUsersInput } from "../inputs/ChainTypeCreateNestedOneWithoutUsersInput";
import { ContributionCreateNestedManyWithoutUserInput } from "../inputs/ContributionCreateNestedManyWithoutUserInput";
import { DiscordUserCreateNestedManyWithoutUserInput } from "../inputs/DiscordUserCreateNestedManyWithoutUserInput";
import { GuildUserCreateNestedManyWithoutUserInput } from "../inputs/GuildUserCreateNestedManyWithoutUserInput";
import { LinearUserCreateNestedManyWithoutUserInput } from "../inputs/LinearUserCreateNestedManyWithoutUserInput";
import { PartnerCreateNestedManyWithoutUserInput } from "../inputs/PartnerCreateNestedManyWithoutUserInput";
import { UserActivityCreateNestedManyWithoutUserInput } from "../inputs/UserActivityCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => ChainTypeCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  chain_type!: ChainTypeCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  full_name?: string | undefined;

  @TypeGraphQL.Field(_type => UserActivityCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  activities?: UserActivityCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  attestations?: AttestationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PartnerCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  contributionPartners?: PartnerCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  contributions?: ContributionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  linear_users?: LinearUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  guild_users?: GuildUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  discord_users?: DiscordUserCreateNestedManyWithoutUserInput | undefined;
}
