import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsWhereInput } from "../../../inputs/VerificationSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  where?: VerificationSettingsWhereInput | undefined;
}
