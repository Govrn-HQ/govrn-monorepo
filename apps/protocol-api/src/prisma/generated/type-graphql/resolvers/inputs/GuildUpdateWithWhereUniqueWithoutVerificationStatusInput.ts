import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUpdateWithoutVerificationStatusInput } from "../inputs/GuildUpdateWithoutVerificationStatusInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateWithWhereUniqueWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildUpdateWithWhereUniqueWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutVerificationStatusInput, {
    nullable: false
  })
  data!: GuildUpdateWithoutVerificationStatusInput;
}
