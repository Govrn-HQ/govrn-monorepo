import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsUpdateManyMutationInput } from "../../../inputs/VerificationSettingsUpdateManyMutationInput";
import { VerificationSettingsWhereInput } from "../../../inputs/VerificationSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VerificationSettingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  where?: VerificationSettingsWhereInput | undefined;
}
