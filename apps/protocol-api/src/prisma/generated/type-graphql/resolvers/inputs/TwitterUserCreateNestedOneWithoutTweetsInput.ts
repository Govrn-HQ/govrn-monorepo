import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserCreateOrConnectWithoutTweetsInput } from "../inputs/TwitterUserCreateOrConnectWithoutTweetsInput";
import { TwitterUserCreateWithoutTweetsInput } from "../inputs/TwitterUserCreateWithoutTweetsInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType("TwitterUserCreateNestedOneWithoutTweetsInput", {
  isAbstract: true
})
export class TwitterUserCreateNestedOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutTweetsInput, {
    nullable: true
  })
  create?: TwitterUserCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateOrConnectWithoutTweetsInput, {
    nullable: true
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitterUserWhereUniqueInput | undefined;
}
