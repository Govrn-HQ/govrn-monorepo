import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyMembership_statusInputEnvelope } from "../inputs/GuildUserCreateManyMembership_statusInputEnvelope";
import { GuildUserCreateOrConnectWithoutMembership_statusInput } from "../inputs/GuildUserCreateOrConnectWithoutMembership_statusInput";
import { GuildUserCreateWithoutMembership_statusInput } from "../inputs/GuildUserCreateWithoutMembership_statusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateNestedManyWithoutMembership_statusInput", {
  isAbstract: true
})
export class GuildUserCreateNestedManyWithoutMembership_statusInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutMembership_statusInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutMembership_statusInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyMembership_statusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyMembership_statusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildUserWhereUniqueInput[] | undefined;
}
