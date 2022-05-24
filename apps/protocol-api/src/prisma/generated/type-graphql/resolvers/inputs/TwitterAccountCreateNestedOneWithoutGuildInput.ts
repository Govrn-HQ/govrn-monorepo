import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountCreateOrConnectWithoutGuildInput } from "../inputs/TwitterAccountCreateOrConnectWithoutGuildInput";
import { TwitterAccountCreateWithoutGuildInput } from "../inputs/TwitterAccountCreateWithoutGuildInput";
import { TwitterAccountWhereUniqueInput } from "../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.InputType("TwitterAccountCreateNestedOneWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountCreateNestedOneWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountCreateWithoutGuildInput, {
    nullable: true
  })
  create?: TwitterAccountCreateWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCreateOrConnectWithoutGuildInput, {
    nullable: true
  })
  connectOrCreate?: TwitterAccountCreateOrConnectWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitterAccountWhereUniqueInput | undefined;
}
