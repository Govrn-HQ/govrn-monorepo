import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutContributionsInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutContributionsInput";
import { ContributionStatusUpdateOneRequiredWithoutContributionsInput } from "../inputs/ContributionStatusUpdateOneRequiredWithoutContributionsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildContributionUpdateManyWithoutContributionInput } from "../inputs/GuildContributionUpdateManyWithoutContributionInput";
import { LinearIssueUpdateOneWithoutContributionInput } from "../inputs/LinearIssueUpdateOneWithoutContributionInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartnerUpdateManyWithoutContributionInput } from "../inputs/PartnerUpdateManyWithoutContributionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetUpdateOneWithoutContributionInput } from "../inputs/TwitterTweetUpdateOneWithoutContributionInput";
import { UserUpdateOneRequiredWithoutContributionsInput } from "../inputs/UserUpdateOneRequiredWithoutContributionsInput";

@TypeGraphQL.InputType("ContributionUpdateWithoutAttestationsInput", {
  isAbstract: true
})
export class ContributionUpdateWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusUpdateOneRequiredWithoutContributionsInput, {
    nullable: true
  })
  status?: ContributionStatusUpdateOneRequiredWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutContributionsInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutContributionsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_submission?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_engagement?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  details?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  proof?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PartnerUpdateManyWithoutContributionInput, {
    nullable: true
  })
  partners?: PartnerUpdateManyWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionUpdateManyWithoutContributionInput, {
    nullable: true
  })
  guilds?: GuildContributionUpdateManyWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpdateOneWithoutContributionInput, {
    nullable: true
  })
  linear_issue?: LinearIssueUpdateOneWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateOneWithoutContributionInput, {
    nullable: true
  })
  tweet?: TwitterTweetUpdateOneWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  on_chain_id?: NullableIntFieldUpdateOperationsInput | undefined;
}
