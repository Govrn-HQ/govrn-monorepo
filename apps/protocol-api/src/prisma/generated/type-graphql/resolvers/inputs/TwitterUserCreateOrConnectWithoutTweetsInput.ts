import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserCreateWithoutTweetsInput } from "../inputs/TwitterUserCreateWithoutTweetsInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType("TwitterUserCreateOrConnectWithoutTweetsInput", {
  isAbstract: true
})
export class TwitterUserCreateOrConnectWithoutTweetsInput {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: TwitterUserCreateWithoutTweetsInput;
}
