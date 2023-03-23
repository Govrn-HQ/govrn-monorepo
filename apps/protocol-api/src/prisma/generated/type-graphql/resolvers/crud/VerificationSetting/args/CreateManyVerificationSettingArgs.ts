import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingCreateManyInput } from "../../../inputs/VerificationSettingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVerificationSettingArgs {
  @TypeGraphQL.Field(_type => [VerificationSettingCreateManyInput], {
    nullable: false
  })
  data!: VerificationSettingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
