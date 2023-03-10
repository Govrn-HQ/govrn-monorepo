import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsCreateManyInput } from "../../../inputs/VerificationSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => [VerificationSettingsCreateManyInput], {
    nullable: false
  })
  data!: VerificationSettingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
