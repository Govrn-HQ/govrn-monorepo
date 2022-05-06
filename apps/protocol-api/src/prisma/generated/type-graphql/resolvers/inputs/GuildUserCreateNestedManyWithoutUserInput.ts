import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyUserInputEnvelope } from "../inputs/GuildUserCreateManyUserInputEnvelope";
import { GuildUserCreateOrConnectWithoutUserInput } from "../inputs/GuildUserCreateOrConnectWithoutUserInput";
import { GuildUserCreateWithoutUserInput } from "../inputs/GuildUserCreateWithoutUserInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class GuildUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildUserWhereUniqueInput[] | undefined;
}
