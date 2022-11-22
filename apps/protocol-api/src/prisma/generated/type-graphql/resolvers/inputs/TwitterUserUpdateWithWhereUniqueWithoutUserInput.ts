import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserUpdateWithoutUserInput } from "../inputs/TwitterUserUpdateWithoutUserInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType("TwitterUserUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TwitterUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterUserUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TwitterUserUpdateWithoutUserInput;
}
