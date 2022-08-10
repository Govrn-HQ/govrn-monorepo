import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateManyUserInputEnvelope } from "../inputs/UserActivityCreateManyUserInputEnvelope";
import { UserActivityCreateOrConnectWithoutUserInput } from "../inputs/UserActivityCreateOrConnectWithoutUserInput";
import { UserActivityCreateWithoutUserInput } from "../inputs/UserActivityCreateWithoutUserInput";
import { UserActivityWhereUniqueInput } from "../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.InputType("UserActivityCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserActivityCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserActivityCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserActivityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserActivityCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserActivityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereUniqueInput], {
    nullable: true
  })
  connect?: UserActivityWhereUniqueInput[] | undefined;
}
