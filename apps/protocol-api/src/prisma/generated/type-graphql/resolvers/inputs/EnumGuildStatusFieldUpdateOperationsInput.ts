import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildStatus } from "../../enums/GuildStatus";

@TypeGraphQL.InputType("EnumGuildStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumGuildStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => GuildStatus, {
    nullable: true
  })
  set?: "INPUTTED" | "VALIDATED" | "ONBOARDED" | undefined;
}
