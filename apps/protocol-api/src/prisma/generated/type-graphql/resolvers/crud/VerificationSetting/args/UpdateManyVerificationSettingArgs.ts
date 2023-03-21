import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingUpdateManyMutationInput } from "../../../inputs/VerificationSettingUpdateManyMutationInput";
import { VerificationSettingWhereInput } from "../../../inputs/VerificationSettingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingUpdateManyMutationInput, {
    nullable: false
  })
  data!: VerificationSettingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  where?: VerificationSettingWhereInput | undefined;
}
