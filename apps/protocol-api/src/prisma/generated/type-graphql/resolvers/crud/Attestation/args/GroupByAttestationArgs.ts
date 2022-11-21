import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationOrderByWithAggregationInput } from "../../../inputs/AttestationOrderByWithAggregationInput";
import { AttestationScalarWhereWithAggregatesInput } from "../../../inputs/AttestationScalarWhereWithAggregatesInput";
import { AttestationWhereInput } from "../../../inputs/AttestationWhereInput";
import { AttestationScalarFieldEnum } from "../../../../enums/AttestationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true
  })
  where?: AttestationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttestationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AttestationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "confidence_id" | "user_id" | "contribution_id" | "date_of_attestation" | "attestation_status_id">;

  @TypeGraphQL.Field(_type => AttestationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AttestationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
