import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput, {
    nullable: true
  })
  create?: GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput, {
    nullable: true
  })
  connectOrCreate?: GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildActivityTypeWhereUniqueInput | undefined;
}
