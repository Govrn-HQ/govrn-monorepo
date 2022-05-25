import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationUpdateManyWithoutUserInput } from "../inputs/AttestationUpdateManyWithoutUserInput";
import { ChainTypeUpdateOneRequiredWithoutUsersInput } from "../inputs/ChainTypeUpdateOneRequiredWithoutUsersInput";
import { ContributionUpdateManyWithoutUserInput } from "../inputs/ContributionUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscordUserUpdateManyWithoutUserInput } from "../inputs/DiscordUserUpdateManyWithoutUserInput";
import { GuildUserUpdateManyWithoutUserInput } from "../inputs/GuildUserUpdateManyWithoutUserInput";
import { LinearUserUpdateManyWithoutUserInput } from "../inputs/LinearUserUpdateManyWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterUserUpdateOneWithoutUserInput } from "../inputs/TwitterUserUpdateOneWithoutUserInput";
import { UserActivityUpdateManyWithoutUserInput } from "../inputs/UserActivityUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutContributionPartnersInput", {
  isAbstract: true
})
export class UserUpdateWithoutContributionPartnersInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  display_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeUpdateOneRequiredWithoutUsersInput, {
    nullable: true
  })
  chain_type?: ChainTypeUpdateOneRequiredWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  full_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityUpdateManyWithoutUserInput, {
    nullable: true
  })
  activities?: UserActivityUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AttestationUpdateManyWithoutUserInput, {
    nullable: true
  })
  attestations?: AttestationUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateManyWithoutUserInput, {
    nullable: true
  })
  contributions?: ContributionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserUpdateManyWithoutUserInput, {
    nullable: true
  })
  linear_users?: LinearUserUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyWithoutUserInput, {
    nullable: true
  })
  guild_users?: GuildUserUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateOneWithoutUserInput, {
    nullable: true
  })
  twitter_user?: TwitterUserUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateManyWithoutUserInput, {
    nullable: true
  })
  discord_users?: DiscordUserUpdateManyWithoutUserInput | undefined;
}
