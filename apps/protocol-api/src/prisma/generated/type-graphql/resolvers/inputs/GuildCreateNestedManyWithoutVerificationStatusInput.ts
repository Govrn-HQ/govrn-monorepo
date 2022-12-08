import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateManyVerificationStatusInputEnvelope } from "../inputs/GuildCreateManyVerificationStatusInputEnvelope";
import { GuildCreateOrConnectWithoutVerificationStatusInput } from "../inputs/GuildCreateOrConnectWithoutVerificationStatusInput";
import { GuildCreateWithoutVerificationStatusInput } from "../inputs/GuildCreateWithoutVerificationStatusInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedManyWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildCreateNestedManyWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => [GuildCreateWithoutVerificationStatusInput], {
    nullable: true
  })
  create?: GuildCreateWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildCreateOrConnectWithoutVerificationStatusInput], {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildCreateManyVerificationStatusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildCreateManyVerificationStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildWhereUniqueInput[] | undefined;
}
