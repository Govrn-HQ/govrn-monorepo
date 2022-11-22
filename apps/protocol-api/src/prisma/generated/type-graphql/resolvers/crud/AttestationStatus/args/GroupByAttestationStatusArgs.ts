import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusOrderByWithAggregationInput } from "../../../inputs/AttestationStatusOrderByWithAggregationInput";
import { AttestationStatusScalarWhereWithAggregatesInput } from "../../../inputs/AttestationStatusScalarWhereWithAggregatesInput";
import { AttestationStatusWhereInput } from "../../../inputs/AttestationStatusWhereInput";
import { AttestationStatusScalarFieldEnum } from "../../../../enums/AttestationStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusWhereInput, {
    nullable: true
  })
  where?: AttestationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttestationStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AttestationStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => AttestationStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AttestationStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
