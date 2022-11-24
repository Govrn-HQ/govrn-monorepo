import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountUpdateWithoutGuildInput } from "../inputs/TwitterAccountUpdateWithoutGuildInput";
import { TwitterAccountWhereUniqueInput } from "../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.InputType("TwitterAccountUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterAccountUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: TwitterAccountUpdateWithoutGuildInput;
}
