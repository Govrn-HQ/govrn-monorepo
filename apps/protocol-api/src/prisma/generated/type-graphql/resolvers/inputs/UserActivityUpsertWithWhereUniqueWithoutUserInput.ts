import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateWithoutUserInput } from "../inputs/UserActivityCreateWithoutUserInput";
import { UserActivityUpdateWithoutUserInput } from "../inputs/UserActivityUpdateWithoutUserInput";
import { UserActivityWhereUniqueInput } from "../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.InputType("UserActivityUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserActivityUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false
  })
  where!: UserActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserActivityUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserActivityUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserActivityCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserActivityCreateWithoutUserInput;
}
