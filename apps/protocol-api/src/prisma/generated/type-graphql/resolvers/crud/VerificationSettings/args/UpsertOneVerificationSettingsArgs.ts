import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsCreateInput } from "../../../inputs/VerificationSettingsCreateInput";
import { VerificationSettingsUpdateInput } from "../../../inputs/VerificationSettingsUpdateInput";
import { VerificationSettingsWhereUniqueInput } from "../../../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingsCreateInput, {
    nullable: false
  })
  create!: VerificationSettingsCreateInput;

  @TypeGraphQL.Field(_type => VerificationSettingsUpdateInput, {
    nullable: false
  })
  update!: VerificationSettingsUpdateInput;
}
