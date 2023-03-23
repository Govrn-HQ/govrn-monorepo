import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateOrConnectWithoutGuildsInput } from "../inputs/VerificationSettingCreateOrConnectWithoutGuildsInput";
import { VerificationSettingCreateWithoutGuildsInput } from "../inputs/VerificationSettingCreateWithoutGuildsInput";
import { VerificationSettingUpdateWithoutGuildsInput } from "../inputs/VerificationSettingUpdateWithoutGuildsInput";
import { VerificationSettingUpsertWithoutGuildsInput } from "../inputs/VerificationSettingUpsertWithoutGuildsInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingUpdateOneWithoutGuildsNestedInput", {
  isAbstract: true
})
export class VerificationSettingUpdateOneWithoutGuildsNestedInput {
  @TypeGraphQL.Field(_type => VerificationSettingCreateWithoutGuildsInput, {
    nullable: true
  })
  create?: VerificationSettingCreateWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingCreateOrConnectWithoutGuildsInput, {
    nullable: true
  })
  connectOrCreate?: VerificationSettingCreateOrConnectWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingUpsertWithoutGuildsInput, {
    nullable: true
  })
  upsert?: VerificationSettingUpsertWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: true
  })
  connect?: VerificationSettingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingUpdateWithoutGuildsInput, {
    nullable: true
  })
  update?: VerificationSettingUpdateWithoutGuildsInput | undefined;
}
