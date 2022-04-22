import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateManyCategory_activityInputEnvelope } from "../inputs/ActivityTypeCreateManyCategory_activityInputEnvelope";
import { ActivityTypeCreateOrConnectWithoutCategory_activityInput } from "../inputs/ActivityTypeCreateOrConnectWithoutCategory_activityInput";
import { ActivityTypeCreateWithoutCategory_activityInput } from "../inputs/ActivityTypeCreateWithoutCategory_activityInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateNestedManyWithoutCategory_activityInput", {
  isAbstract: true
})
export class ActivityTypeCreateNestedManyWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => [ActivityTypeCreateWithoutCategory_activityInput], {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeCreateOrConnectWithoutCategory_activityInput], {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutCategory_activityInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateManyCategory_activityInputEnvelope, {
    nullable: true
  })
  createMany?: ActivityTypeCreateManyCategory_activityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput[] | undefined;
}
