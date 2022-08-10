import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateOneRequiredWithoutGuildsInput } from "../inputs/ContributionUpdateOneRequiredWithoutGuildsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutContributionsInput } from "../inputs/GuildUpdateOneRequiredWithoutContributionsInput";

@TypeGraphQL.InputType("GuildContributionUpdateInput", {
  isAbstract: true
})
export class GuildContributionUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutContributionsInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutGuildsInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutGuildsInput | undefined;
}
