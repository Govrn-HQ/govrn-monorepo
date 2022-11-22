import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountCreateManyGuildInputEnvelope } from "../inputs/TwitterAccountCreateManyGuildInputEnvelope";
import { TwitterAccountCreateOrConnectWithoutGuildInput } from "../inputs/TwitterAccountCreateOrConnectWithoutGuildInput";
import { TwitterAccountCreateWithoutGuildInput } from "../inputs/TwitterAccountCreateWithoutGuildInput";
import { TwitterAccountWhereUniqueInput } from "../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.InputType("TwitterAccountCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [TwitterAccountCreateWithoutGuildInput], {
    nullable: true
  })
  create?: TwitterAccountCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: TwitterAccountCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterAccountCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterAccountWhereUniqueInput[] | undefined;
}
