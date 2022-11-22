import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserCreateManyUserInputEnvelope } from "../inputs/TwitterUserCreateManyUserInputEnvelope";
import { TwitterUserCreateOrConnectWithoutUserInput } from "../inputs/TwitterUserCreateOrConnectWithoutUserInput";
import { TwitterUserCreateWithoutUserInput } from "../inputs/TwitterUserCreateWithoutUserInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType("TwitterUserCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class TwitterUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TwitterUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: TwitterUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterUserWhereUniqueInput[] | undefined;
}
