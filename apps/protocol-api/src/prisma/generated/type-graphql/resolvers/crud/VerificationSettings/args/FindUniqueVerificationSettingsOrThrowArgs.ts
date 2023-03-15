import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsWhereUniqueInput } from "../../../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVerificationSettingsOrThrowArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingsWhereUniqueInput;
}