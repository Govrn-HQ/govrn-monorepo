import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutVerificationStatusInput } from "../inputs/GuildCreateWithoutVerificationStatusInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutVerificationStatusInput, {
    nullable: false
  })
  create!: GuildCreateWithoutVerificationStatusInput;
}
