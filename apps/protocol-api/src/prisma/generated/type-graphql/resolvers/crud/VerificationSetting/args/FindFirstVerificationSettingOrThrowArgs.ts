import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationSettingOrderByWithRelationInput } from "../../../inputs/VerificationSettingOrderByWithRelationInput";
import { VerificationSettingWhereInput } from "../../../inputs/VerificationSettingWhereInput";
import { VerificationSettingWhereUniqueInput } from "../../../inputs/VerificationSettingWhereUniqueInput";
import { VerificationSettingScalarFieldEnum } from "../../../../enums/VerificationSettingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstVerificationSettingOrThrowArgs {
  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  where?: VerificationSettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VerificationSettingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: true
  })
  cursor?: VerificationSettingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "num_of_attestations"> | undefined;
}
