import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateWithoutUsersInput } from "../inputs/ActivityTypeCreateWithoutUsersInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class ActivityTypeCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ActivityTypeCreateWithoutUsersInput;
}
