import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateWithoutContributionsInput } from "../inputs/ActivityTypeCreateWithoutContributionsInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateOrConnectWithoutContributionsInput", {
  isAbstract: true
})
export class ActivityTypeCreateOrConnectWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutContributionsInput, {
    nullable: false
  })
  create!: ActivityTypeCreateWithoutContributionsInput;
}
