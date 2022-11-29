import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountCreateWithoutGuildInput } from "../inputs/TwitterAccountCreateWithoutGuildInput";
import { TwitterAccountUpdateWithoutGuildInput } from "../inputs/TwitterAccountUpdateWithoutGuildInput";
import { TwitterAccountWhereUniqueInput } from "../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.InputType("TwitterAccountUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterAccountUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: TwitterAccountUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => TwitterAccountCreateWithoutGuildInput, {
    nullable: false
  })
  create!: TwitterAccountCreateWithoutGuildInput;
}
