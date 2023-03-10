import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutVerificationSettingsInput } from "../inputs/GuildCreateNestedOneWithoutVerificationSettingsInput";

@TypeGraphQL.InputType("VerificationSettingsCreateInput", {
  isAbstract: true
})
export class VerificationSettingsCreateInput {
  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutVerificationSettingsInput, {
    nullable: true
  })
  guild?: GuildCreateNestedOneWithoutVerificationSettingsInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  num_of_attestations!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
