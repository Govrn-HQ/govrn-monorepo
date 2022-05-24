import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountCreateOrConnectWithoutGuildInput } from "../inputs/TwitterAccountCreateOrConnectWithoutGuildInput";
import { TwitterAccountCreateWithoutGuildInput } from "../inputs/TwitterAccountCreateWithoutGuildInput";
import { TwitterAccountUpdateWithoutGuildInput } from "../inputs/TwitterAccountUpdateWithoutGuildInput";
import { TwitterAccountUpsertWithoutGuildInput } from "../inputs/TwitterAccountUpsertWithoutGuildInput";
import { TwitterAccountWhereUniqueInput } from "../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.InputType("TwitterAccountUpdateOneWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountUpdateOneWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountCreateWithoutGuildInput, {
    nullable: true
  })
  create?: TwitterAccountCreateWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCreateOrConnectWithoutGuildInput, {
    nullable: true
  })
  connectOrCreate?: TwitterAccountCreateOrConnectWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountUpsertWithoutGuildInput, {
    nullable: true
  })
  upsert?: TwitterAccountUpsertWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitterAccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountUpdateWithoutGuildInput, {
    nullable: true
  })
  update?: TwitterAccountUpdateWithoutGuildInput | undefined;
}
