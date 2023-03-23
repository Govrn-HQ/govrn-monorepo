import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateManyVerification_settingInput } from "../inputs/GuildCreateManyVerification_settingInput";

@TypeGraphQL.InputType("GuildCreateManyVerification_settingInputEnvelope", {
  isAbstract: true
})
export class GuildCreateManyVerification_settingInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildCreateManyVerification_settingInput], {
    nullable: false
  })
  data!: GuildCreateManyVerification_settingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
