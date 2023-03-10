import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsCreateManyGuildInput } from "../inputs/VerificationSettingsCreateManyGuildInput";

@TypeGraphQL.InputType("VerificationSettingsCreateManyGuildInputEnvelope", {
  isAbstract: true
})
export class VerificationSettingsCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [VerificationSettingsCreateManyGuildInput], {
    nullable: false
  })
  data!: VerificationSettingsCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
