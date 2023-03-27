import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingCreateInput } from "../../../inputs/VerificationSettingCreateInput";
import { VerificationSettingUpdateInput } from "../../../inputs/VerificationSettingUpdateInput";
import { VerificationSettingWhereUniqueInput } from "../../../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingCreateInput, {
    nullable: false
  })
  create!: VerificationSettingCreateInput;

  @TypeGraphQL.Field(_type => VerificationSettingUpdateInput, {
    nullable: false
  })
  update!: VerificationSettingUpdateInput;
}
