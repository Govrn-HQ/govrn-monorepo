import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeUpsertWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeUpsertWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput, {
    nullable: true
  })
  create?: GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput, {
    nullable: true
  })
  connectOrCreate?: GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpsertWithoutCanonicalGuildActivityTypeInput, {
    nullable: true
  })
  upsert?: GuildActivityTypeUpsertWithoutCanonicalGuildActivityTypeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput, {
    nullable: true
  })
  update?: GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput | undefined;
}
