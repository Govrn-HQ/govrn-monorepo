import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateManyCategory_activityInputEnvelope } from "../inputs/ActivityTypeCreateManyCategory_activityInputEnvelope";
import { ActivityTypeCreateOrConnectWithoutCategory_activityInput } from "../inputs/ActivityTypeCreateOrConnectWithoutCategory_activityInput";
import { ActivityTypeCreateWithoutCategory_activityInput } from "../inputs/ActivityTypeCreateWithoutCategory_activityInput";
import { ActivityTypeScalarWhereInput } from "../inputs/ActivityTypeScalarWhereInput";
import { ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput } from "../inputs/ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput";
import { ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput } from "../inputs/ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput";
import { ActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput } from "../inputs/ActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeUpdateManyWithoutCategory_activityInput", {
  isAbstract: true
})
export class ActivityTypeUpdateManyWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => [ActivityTypeCreateWithoutCategory_activityInput], {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeCreateOrConnectWithoutCategory_activityInput], {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput], {
    nullable: true
  })
  upsert?: ActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateManyCategory_activityInputEnvelope, {
    nullable: true
  })
  createMany?: ActivityTypeCreateManyCategory_activityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereUniqueInput], {
    nullable: true
  })
  set?: ActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: ActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput], {
    nullable: true
  })
  update?: ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput], {
    nullable: true
  })
  updateMany?: ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActivityTypeScalarWhereInput[] | undefined;
}
