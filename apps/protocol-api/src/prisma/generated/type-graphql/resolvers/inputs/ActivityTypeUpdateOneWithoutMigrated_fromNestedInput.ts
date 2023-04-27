import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateOrConnectWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateOrConnectWithoutMigrated_fromInput";
import { ActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateWithoutMigrated_fromInput";
import { ActivityTypeUpdateWithoutMigrated_fromInput } from "../inputs/ActivityTypeUpdateWithoutMigrated_fromInput";
import { ActivityTypeUpsertWithoutMigrated_fromInput } from "../inputs/ActivityTypeUpsertWithoutMigrated_fromInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeUpdateOneWithoutMigrated_fromNestedInput", {
  isAbstract: true
})
export class ActivityTypeUpdateOneWithoutMigrated_fromNestedInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutMigrated_fromInput, {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutMigrated_fromInput, {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpsertWithoutMigrated_fromInput, {
    nullable: true
  })
  upsert?: ActivityTypeUpsertWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutMigrated_fromInput, {
    nullable: true
  })
  update?: ActivityTypeUpdateWithoutMigrated_fromInput | undefined;
}
