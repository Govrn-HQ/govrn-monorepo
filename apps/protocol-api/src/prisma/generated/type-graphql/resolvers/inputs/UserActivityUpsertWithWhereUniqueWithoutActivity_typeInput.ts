import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateWithoutActivity_typeInput } from "../inputs/UserActivityCreateWithoutActivity_typeInput";
import { UserActivityUpdateWithoutActivity_typeInput } from "../inputs/UserActivityUpdateWithoutActivity_typeInput";
import { UserActivityWhereUniqueInput } from "../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.InputType("UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput", {
  isAbstract: true
})
export class UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false
  })
  where!: UserActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserActivityUpdateWithoutActivity_typeInput, {
    nullable: false
  })
  update!: UserActivityUpdateWithoutActivity_typeInput;

  @TypeGraphQL.Field(_type => UserActivityCreateWithoutActivity_typeInput, {
    nullable: false
  })
  create!: UserActivityCreateWithoutActivity_typeInput;
}
