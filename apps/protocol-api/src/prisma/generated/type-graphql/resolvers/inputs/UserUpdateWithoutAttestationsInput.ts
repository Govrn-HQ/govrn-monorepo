import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainTypeUpdateOneRequiredWithoutUsersInput } from "../inputs/ChainTypeUpdateOneRequiredWithoutUsersInput";
import { ContributionUpdateManyWithoutUserInput } from "../inputs/ContributionUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LinearUserUpdateManyWithoutUserInput } from "../inputs/LinearUserUpdateManyWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartnerUpdateManyWithoutUserInput } from "../inputs/PartnerUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserActivityUpdateManyWithoutUserInput } from "../inputs/UserActivityUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutAttestationsInput", {
  isAbstract: true
})
export class UserUpdateWithoutAttestationsInput {
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
  dispaly_name?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => PartnerUpdateManyWithoutUserInput, {
    nullable: true
  })
  contributionPartners?: PartnerUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateManyWithoutUserInput, {
    nullable: true
  })
  contributions?: ContributionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserUpdateManyWithoutUserInput, {
    nullable: true
  })
  linear_users?: LinearUserUpdateManyWithoutUserInput | undefined;
}
