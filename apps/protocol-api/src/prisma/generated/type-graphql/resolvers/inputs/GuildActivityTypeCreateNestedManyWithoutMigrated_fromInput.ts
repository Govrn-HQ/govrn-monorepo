import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateManyMigrated_fromInputEnvelope } from "../inputs/GuildActivityTypeCreateManyMigrated_fromInputEnvelope";
import { GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput";
import { GuildActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeCreateWithoutMigrated_fromInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateNestedManyWithoutMigrated_fromInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateNestedManyWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateWithoutMigrated_fromInput], {
    nullable: true
  })
  create?: GuildActivityTypeCreateWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput], {
    nullable: true
  })
  connectOrCreate?: GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateManyMigrated_fromInputEnvelope, {
    nullable: true
  })
  createMany?: GuildActivityTypeCreateManyMigrated_fromInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildActivityTypeWhereUniqueInput[] | undefined;
}
