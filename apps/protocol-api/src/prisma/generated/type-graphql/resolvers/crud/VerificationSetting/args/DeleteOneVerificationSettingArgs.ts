import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingWhereUniqueInput } from "../../../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;
}
