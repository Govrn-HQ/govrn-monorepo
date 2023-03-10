import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsOrderByWithRelationInput } from "../../../inputs/VerificationSettingsOrderByWithRelationInput";
import { VerificationSettingsWhereInput } from "../../../inputs/VerificationSettingsWhereInput";
import { VerificationSettingsWhereUniqueInput } from "../../../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  where?: VerificationSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VerificationSettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VerificationSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
