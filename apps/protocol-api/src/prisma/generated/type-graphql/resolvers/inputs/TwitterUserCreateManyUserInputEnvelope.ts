import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserCreateManyUserInput } from "../inputs/TwitterUserCreateManyUserInput";

@TypeGraphQL.InputType("TwitterUserCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TwitterUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TwitterUserCreateManyUserInput], {
    nullable: false
  })
  data!: TwitterUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
