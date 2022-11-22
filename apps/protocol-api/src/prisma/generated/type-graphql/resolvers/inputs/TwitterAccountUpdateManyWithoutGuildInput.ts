import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountCreateManyGuildInputEnvelope } from "../inputs/TwitterAccountCreateManyGuildInputEnvelope";
import { TwitterAccountCreateOrConnectWithoutGuildInput } from "../inputs/TwitterAccountCreateOrConnectWithoutGuildInput";
import { TwitterAccountCreateWithoutGuildInput } from "../inputs/TwitterAccountCreateWithoutGuildInput";
import { TwitterAccountScalarWhereInput } from "../inputs/TwitterAccountScalarWhereInput";
import { TwitterAccountUpdateManyWithWhereWithoutGuildInput } from "../inputs/TwitterAccountUpdateManyWithWhereWithoutGuildInput";
import { TwitterAccountUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/TwitterAccountUpdateWithWhereUniqueWithoutGuildInput";
import { TwitterAccountUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/TwitterAccountUpsertWithWhereUniqueWithoutGuildInput";
import { TwitterAccountWhereUniqueInput } from "../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.InputType("TwitterAccountUpdateManyWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountUpdateManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [TwitterAccountCreateWithoutGuildInput], {
    nullable: true
  })
  create?: TwitterAccountCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: TwitterAccountCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: TwitterAccountUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterAccountCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereUniqueInput], {
    nullable: true
  })
  set?: TwitterAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TwitterAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereUniqueInput], {
    nullable: true
  })
  delete?: TwitterAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: TwitterAccountUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: TwitterAccountUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TwitterAccountScalarWhereInput[] | undefined;
}
