import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingWhereInput } from "../../../inputs/VerificationSettingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  where?: VerificationSettingWhereInput | undefined;
}
