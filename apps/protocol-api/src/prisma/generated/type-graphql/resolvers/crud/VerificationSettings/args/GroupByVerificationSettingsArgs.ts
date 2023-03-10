import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingsOrderByWithAggregationInput } from "../../../inputs/VerificationSettingsOrderByWithAggregationInput";
import { VerificationSettingsScalarWhereWithAggregatesInput } from "../../../inputs/VerificationSettingsScalarWhereWithAggregatesInput";
import { VerificationSettingsWhereInput } from "../../../inputs/VerificationSettingsWhereInput";
import { VerificationSettingsScalarFieldEnum } from "../../../../enums/VerificationSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVerificationSettingsArgs {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  where?: VerificationSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VerificationSettingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "guild_id" | "num_of_attestations" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => VerificationSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VerificationSettingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
