import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedManyWithoutVerification_settingInput } from "../inputs/GuildCreateNestedManyWithoutVerification_settingInput";

@TypeGraphQL.InputType("VerificationSettingCreateInput", {
  isAbstract: true
})
export class VerificationSettingCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  num_of_attestations!: number;

  @TypeGraphQL.Field(_type => GuildCreateNestedManyWithoutVerification_settingInput, {
    nullable: true
  })
  guilds?: GuildCreateNestedManyWithoutVerification_settingInput | undefined;
}
