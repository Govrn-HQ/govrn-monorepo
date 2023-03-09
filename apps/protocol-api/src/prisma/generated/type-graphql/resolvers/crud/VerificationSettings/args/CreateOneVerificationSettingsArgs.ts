import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsCreateInput } from "../../../inputs/VerificationSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsCreateInput, {
    nullable: false
  })
  data!: VerificationSettingsCreateInput;
}
