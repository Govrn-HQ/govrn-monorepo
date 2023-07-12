import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput";
import { AttestationUpdateManyWithoutContributionNestedInput } from "../inputs/AttestationUpdateManyWithoutContributionNestedInput";
import { ChainUpdateOneWithoutContributionsNestedInput } from "../inputs/ChainUpdateOneWithoutContributionsNestedInput";
import { ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput } from "../inputs/ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildContributionUpdateManyWithoutContributionNestedInput } from "../inputs/GuildContributionUpdateManyWithoutContributionNestedInput";
import { LinearIssueUpdateOneWithoutContributionNestedInput } from "../inputs/LinearIssueUpdateOneWithoutContributionNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartnerUpdateManyWithoutContributionNestedInput } from "../inputs/PartnerUpdateManyWithoutContributionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetContributionUpdateManyWithoutContributionNestedInput } from "../inputs/TwitterTweetContributionUpdateManyWithoutContributionNestedInput";
import { UserUpdateOneRequiredWithoutContributionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutContributionsNestedInput";

@TypeGraphQL.InputType("ContributionUpdateWithoutContribution_tipInput", {
  isAbstract: true
})
export class ContributionUpdateWithoutContribution_tipInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput, {
    nullable: true
  })
  status?: ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutContributionsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutContributionsNestedInput | undefined;

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

  @TypeGraphQL.Field(_type => AttestationUpdateManyWithoutContributionNestedInput, {
    nullable: true
  })
  attestations?: AttestationUpdateManyWithoutContributionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PartnerUpdateManyWithoutContributionNestedInput, {
    nullable: true
  })
  partners?: PartnerUpdateManyWithoutContributionNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionUpdateManyWithoutContributionNestedInput, {
    nullable: true
  })
  guilds?: GuildContributionUpdateManyWithoutContributionNestedInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpdateOneWithoutContributionNestedInput, {
    nullable: true
  })
  linear_issue?: LinearIssueUpdateOneWithoutContributionNestedInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateManyWithoutContributionNestedInput, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionUpdateManyWithoutContributionNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateOneWithoutContributionsNestedInput, {
    nullable: true
  })
  chain?: ChainUpdateOneWithoutContributionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  on_chain_id?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tx_hash?: NullableStringFieldUpdateOperationsInput | undefined;
}
