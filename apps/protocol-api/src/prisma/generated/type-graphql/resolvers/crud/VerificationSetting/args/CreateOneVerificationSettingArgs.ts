import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingCreateInput } from "../../../inputs/VerificationSettingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingCreateInput, {
    nullable: false
  })
  data!: VerificationSettingCreateInput;
}
