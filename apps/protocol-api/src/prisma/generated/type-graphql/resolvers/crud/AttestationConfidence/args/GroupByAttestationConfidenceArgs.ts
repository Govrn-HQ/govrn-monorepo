import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationConfidenceOrderByWithAggregationInput } from "../../../inputs/AttestationConfidenceOrderByWithAggregationInput";
import { AttestationConfidenceScalarWhereWithAggregatesInput } from "../../../inputs/AttestationConfidenceScalarWhereWithAggregatesInput";
import { AttestationConfidenceWhereInput } from "../../../inputs/AttestationConfidenceWhereInput";
import { AttestationConfidenceScalarFieldEnum } from "../../../../enums/AttestationConfidenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereInput, {
    nullable: true
  })
  where?: AttestationConfidenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttestationConfidenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AttestationConfidenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationConfidenceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => AttestationConfidenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AttestationConfidenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
