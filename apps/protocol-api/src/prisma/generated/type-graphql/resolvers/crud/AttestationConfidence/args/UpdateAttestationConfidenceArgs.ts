import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationConfidenceUpdateInput } from "../../../inputs/AttestationConfidenceUpdateInput";
import { AttestationConfidenceWhereUniqueInput } from "../../../inputs/AttestationConfidenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateInput, {
    nullable: false
  })
  data!: AttestationConfidenceUpdateInput;

  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationConfidenceWhereUniqueInput;
}
