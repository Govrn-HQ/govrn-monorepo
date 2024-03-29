import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateNestedManyWithoutUserInput } from "../inputs/AttestationCreateNestedManyWithoutUserInput";
import { ChainTypeCreateNestedOneWithoutUsersInput } from "../inputs/ChainTypeCreateNestedOneWithoutUsersInput";
import { DiscordUserCreateNestedManyWithoutUserInput } from "../inputs/DiscordUserCreateNestedManyWithoutUserInput";
import { GuildUserCreateNestedManyWithoutUserInput } from "../inputs/GuildUserCreateNestedManyWithoutUserInput";
import { LinearUserCreateNestedManyWithoutUserInput } from "../inputs/LinearUserCreateNestedManyWithoutUserInput";
import { PartnerCreateNestedManyWithoutUserInput } from "../inputs/PartnerCreateNestedManyWithoutUserInput";
import { SplitPaymentCreateNestedManyWithoutSender_userInput } from "../inputs/SplitPaymentCreateNestedManyWithoutSender_userInput";
import { TwitterUserCreateNestedOneWithoutUserInput } from "../inputs/TwitterUserCreateNestedOneWithoutUserInput";
import { UserActivityCreateNestedManyWithoutUserInput } from "../inputs/UserActivityCreateNestedManyWithoutUserInput";
import { UserSplitContractCreateNestedManyWithoutUserInput } from "../inputs/UserSplitContractCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutContributionsInput", {
  isAbstract: true
})
export class UserCreateWithoutContributionsInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

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

  @TypeGraphQL.Field(_type => LinearUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  linear_users?: LinearUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  guild_users?: GuildUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  twitter_user?: TwitterUserCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  discord_users?: DiscordUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  split_contracts?: UserSplitContractCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateNestedManyWithoutSender_userInput, {
    nullable: true
  })
  sent_split_payments?: SplitPaymentCreateNestedManyWithoutSender_userInput | undefined;
}
