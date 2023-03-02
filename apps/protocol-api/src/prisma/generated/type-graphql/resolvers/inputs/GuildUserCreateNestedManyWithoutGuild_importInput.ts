import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyGuild_importInputEnvelope } from "../inputs/GuildUserCreateManyGuild_importInputEnvelope";
import { GuildUserCreateOrConnectWithoutGuild_importInput } from "../inputs/GuildUserCreateOrConnectWithoutGuild_importInput";
import { GuildUserCreateWithoutGuild_importInput } from "../inputs/GuildUserCreateWithoutGuild_importInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateNestedManyWithoutGuild_importInput", {
  isAbstract: true
})
export class GuildUserCreateNestedManyWithoutGuild_importInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutGuild_importInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutGuild_importInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyGuild_importInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyGuild_importInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildUserWhereUniqueInput[] | undefined;
}
