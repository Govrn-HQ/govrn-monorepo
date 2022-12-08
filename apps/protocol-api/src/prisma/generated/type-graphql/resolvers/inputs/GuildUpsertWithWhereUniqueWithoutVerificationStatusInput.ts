import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutVerificationStatusInput } from "../inputs/GuildCreateWithoutVerificationStatusInput";
import { GuildUpdateWithoutVerificationStatusInput } from "../inputs/GuildUpdateWithoutVerificationStatusInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpsertWithWhereUniqueWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildUpsertWithWhereUniqueWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutVerificationStatusInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutVerificationStatusInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutVerificationStatusInput, {
    nullable: false
  })
  create!: GuildCreateWithoutVerificationStatusInput;
}
