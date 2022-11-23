import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountCreateManyGuildInput } from "../inputs/TwitterAccountCreateManyGuildInput";

@TypeGraphQL.InputType("TwitterAccountCreateManyGuildInputEnvelope", {
  isAbstract: true
})
export class TwitterAccountCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [TwitterAccountCreateManyGuildInput], {
    nullable: false
  })
  data!: TwitterAccountCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
