import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateOrConnectWithoutContributionsInput } from "../inputs/ActivityTypeCreateOrConnectWithoutContributionsInput";
import { ActivityTypeCreateWithoutContributionsInput } from "../inputs/ActivityTypeCreateWithoutContributionsInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateNestedOneWithoutContributionsInput", {
  isAbstract: true
})
export class ActivityTypeCreateNestedOneWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: ActivityTypeCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;
}
