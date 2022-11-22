import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserCreateWithoutUserInput } from "../inputs/TwitterUserCreateWithoutUserInput";
import { TwitterUserUpdateWithoutUserInput } from "../inputs/TwitterUserUpdateWithoutUserInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType("TwitterUserUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TwitterUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TwitterUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: TwitterUserCreateWithoutUserInput;
}
