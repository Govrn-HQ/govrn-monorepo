import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationUpdateManyWithoutUserNestedInput } from "../inputs/AttestationUpdateManyWithoutUserNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChainTypeUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/ChainTypeUpdateOneRequiredWithoutUsersNestedInput";
import { ContributionUpdateManyWithoutUserNestedInput } from "../inputs/ContributionUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscordUserUpdateManyWithoutUserNestedInput } from "../inputs/DiscordUserUpdateManyWithoutUserNestedInput";
import { GuildUserUpdateManyWithoutUserNestedInput } from "../inputs/GuildUserUpdateManyWithoutUserNestedInput";
import { LinearUserUpdateManyWithoutUserNestedInput } from "../inputs/LinearUserUpdateManyWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartnerUpdateManyWithoutUserNestedInput } from "../inputs/PartnerUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterUserUpdateOneWithoutUserNestedInput } from "../inputs/TwitterUserUpdateOneWithoutUserNestedInput";
import { UserActivityUpdateManyWithoutUserNestedInput } from "../inputs/UserActivityUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
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

  @TypeGraphQL.Field(_type => ChainTypeUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true
  })
  chain_type?: ChainTypeUpdateOneRequiredWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  full_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  activities?: UserActivityUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => AttestationUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  attestations?: AttestationUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PartnerUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  contributionPartners?: PartnerUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  contributions?: ContributionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  linear_users?: LinearUserUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  guild_users?: GuildUserUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  twitter_user?: TwitterUserUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  discord_users?: DiscordUserUpdateManyWithoutUserNestedInput | undefined;
}
