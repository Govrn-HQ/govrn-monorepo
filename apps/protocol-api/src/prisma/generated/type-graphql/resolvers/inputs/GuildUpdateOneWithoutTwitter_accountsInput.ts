import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutTwitter_accountsInput } from "../inputs/GuildCreateOrConnectWithoutTwitter_accountsInput";
import { GuildCreateWithoutTwitter_accountsInput } from "../inputs/GuildCreateWithoutTwitter_accountsInput";
import { GuildUpdateWithoutTwitter_accountsInput } from "../inputs/GuildUpdateWithoutTwitter_accountsInput";
import { GuildUpsertWithoutTwitter_accountsInput } from "../inputs/GuildUpsertWithoutTwitter_accountsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneWithoutTwitter_accountsInput", {
  isAbstract: true
})
export class GuildUpdateOneWithoutTwitter_accountsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutTwitter_accountsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutTwitter_accountsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutTwitter_accountsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutTwitter_accountsInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutTwitter_accountsInput | undefined;

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

  @TypeGraphQL.Field(_type => GuildUpdateWithoutTwitter_accountsInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutTwitter_accountsInput | undefined;
}
