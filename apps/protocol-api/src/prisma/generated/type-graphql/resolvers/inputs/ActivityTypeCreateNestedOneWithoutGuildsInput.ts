import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateOrConnectWithoutGuildsInput } from "../inputs/ActivityTypeCreateOrConnectWithoutGuildsInput";
import { ActivityTypeCreateWithoutGuildsInput } from "../inputs/ActivityTypeCreateWithoutGuildsInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateNestedOneWithoutGuildsInput", {
  isAbstract: true
})
export class ActivityTypeCreateNestedOneWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutGuildsInput, {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutGuildsInput, {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;
}
