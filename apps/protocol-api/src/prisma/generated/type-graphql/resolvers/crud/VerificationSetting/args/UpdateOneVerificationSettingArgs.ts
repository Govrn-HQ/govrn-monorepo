import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingUpdateInput } from "../../../inputs/VerificationSettingUpdateInput";
import { VerificationSettingWhereUniqueInput } from "../../../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingUpdateInput, {
    nullable: false
  })
  data!: VerificationSettingUpdateInput;

  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;
}
