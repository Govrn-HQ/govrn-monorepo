import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationConfidenceOrderByWithRelationInput } from "../../../inputs/AttestationConfidenceOrderByWithRelationInput";
import { AttestationConfidenceWhereInput } from "../../../inputs/AttestationConfidenceWhereInput";
import { AttestationConfidenceWhereUniqueInput } from "../../../inputs/AttestationConfidenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereInput, {
    nullable: true
  })
  where?: AttestationConfidenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttestationConfidenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AttestationConfidenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: AttestationConfidenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
