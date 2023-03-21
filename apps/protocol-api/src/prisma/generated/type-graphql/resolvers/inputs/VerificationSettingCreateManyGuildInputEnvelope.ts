import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateManyGuildInput } from "../inputs/VerificationSettingCreateManyGuildInput";

@TypeGraphQL.InputType("VerificationSettingCreateManyGuildInputEnvelope", {
  isAbstract: true
})
export class VerificationSettingCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [VerificationSettingCreateManyGuildInput], {
    nullable: false
  })
  data!: VerificationSettingCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
