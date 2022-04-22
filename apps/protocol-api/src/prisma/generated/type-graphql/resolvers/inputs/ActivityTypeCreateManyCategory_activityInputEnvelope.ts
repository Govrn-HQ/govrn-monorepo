import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateManyCategory_activityInput } from "../inputs/ActivityTypeCreateManyCategory_activityInput";

@TypeGraphQL.InputType("ActivityTypeCreateManyCategory_activityInputEnvelope", {
  isAbstract: true
})
export class ActivityTypeCreateManyCategory_activityInputEnvelope {
  @TypeGraphQL.Field(_type => [ActivityTypeCreateManyCategory_activityInput], {
    nullable: false
  })
  data!: ActivityTypeCreateManyCategory_activityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
