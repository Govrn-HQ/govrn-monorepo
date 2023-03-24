import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingOrderByWithAggregationInput } from "../../../inputs/VerificationSettingOrderByWithAggregationInput";
import { VerificationSettingScalarWhereWithAggregatesInput } from "../../../inputs/VerificationSettingScalarWhereWithAggregatesInput";
import { VerificationSettingWhereInput } from "../../../inputs/VerificationSettingWhereInput";
import { VerificationSettingScalarFieldEnum } from "../../../../enums/VerificationSettingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVerificationSettingArgs {
  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  where?: VerificationSettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VerificationSettingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "num_of_attestations">;

  @TypeGraphQL.Field(_type => VerificationSettingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VerificationSettingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
