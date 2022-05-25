import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutTwitter_accountInput } from "../inputs/GuildCreateOrConnectWithoutTwitter_accountInput";
import { GuildCreateWithoutTwitter_accountInput } from "../inputs/GuildCreateWithoutTwitter_accountInput";
import { GuildUpdateWithoutTwitter_accountInput } from "../inputs/GuildUpdateWithoutTwitter_accountInput";
import { GuildUpsertWithoutTwitter_accountInput } from "../inputs/GuildUpsertWithoutTwitter_accountInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneWithoutTwitter_accountInput", {
  isAbstract: true
})
export class GuildUpdateOneWithoutTwitter_accountInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountInput, {
    nullable: true
  })
  create?: GuildCreateWithoutTwitter_accountInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutTwitter_accountInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutTwitter_accountInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutTwitter_accountInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutTwitter_accountInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutTwitter_accountInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutTwitter_accountInput | undefined;
}
