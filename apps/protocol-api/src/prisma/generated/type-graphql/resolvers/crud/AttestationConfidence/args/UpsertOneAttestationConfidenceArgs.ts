import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationConfidenceCreateInput } from "../../../inputs/AttestationConfidenceCreateInput";
import { AttestationConfidenceUpdateInput } from "../../../inputs/AttestationConfidenceUpdateInput";
import { AttestationConfidenceWhereUniqueInput } from "../../../inputs/AttestationConfidenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationConfidenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationConfidenceCreateInput, {
    nullable: false
  })
  create!: AttestationConfidenceCreateInput;

  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateInput, {
    nullable: false
  })
  update!: AttestationConfidenceUpdateInput;
}
