import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildContributionVerificationStatusUpdateOneWithoutGuild_contributionsNestedInput } from "../inputs/GuildContributionVerificationStatusUpdateOneWithoutGuild_contributionsNestedInput";
import { GuildUpdateOneRequiredWithoutContributionsNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutContributionsNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuildContributionUpdateWithoutContributionInput", {
  isAbstract: true
})
export class GuildContributionUpdateWithoutContributionInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutContributionsNestedInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutContributionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  verified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  attestation_threshold?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpdateOneWithoutGuild_contributionsNestedInput, {
    nullable: true
  })
  verificationStatus?: GuildContributionVerificationStatusUpdateOneWithoutGuild_contributionsNestedInput | undefined;
}
