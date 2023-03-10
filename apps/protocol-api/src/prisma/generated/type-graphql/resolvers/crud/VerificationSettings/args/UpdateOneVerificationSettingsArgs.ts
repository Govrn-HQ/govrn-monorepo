import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsUpdateInput } from "../../../inputs/VerificationSettingsUpdateInput";
import { VerificationSettingsWhereUniqueInput } from "../../../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsUpdateInput, {
    nullable: false
  })
  data!: VerificationSettingsUpdateInput;

  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingsWhereUniqueInput;
}
