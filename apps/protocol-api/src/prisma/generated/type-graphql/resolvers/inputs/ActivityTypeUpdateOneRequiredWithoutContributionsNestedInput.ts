import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateOrConnectWithoutContributionsInput } from "../inputs/ActivityTypeCreateOrConnectWithoutContributionsInput";
import { ActivityTypeCreateWithoutContributionsInput } from "../inputs/ActivityTypeCreateWithoutContributionsInput";
import { ActivityTypeUpdateWithoutContributionsInput } from "../inputs/ActivityTypeUpdateWithoutContributionsInput";
import { ActivityTypeUpsertWithoutContributionsInput } from "../inputs/ActivityTypeUpsertWithoutContributionsInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput", {
  isAbstract: true
})
export class ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpsertWithoutContributionsInput, {
    nullable: true
  })
  upsert?: ActivityTypeUpsertWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutContributionsInput, {
    nullable: true
  })
  update?: ActivityTypeUpdateWithoutContributionsInput | undefined;
}
