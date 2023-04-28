import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateOrConnectWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateOrConnectWithoutMigrated_fromInput";
import { ActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateWithoutMigrated_fromInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateNestedOneWithoutMigrated_fromInput", {
  isAbstract: true
})
export class ActivityTypeCreateNestedOneWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutMigrated_fromInput, {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutMigrated_fromInput, {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;
}
