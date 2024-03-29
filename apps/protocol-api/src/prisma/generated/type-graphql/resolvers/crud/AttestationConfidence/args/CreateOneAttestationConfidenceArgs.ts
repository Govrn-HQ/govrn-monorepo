import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationConfidenceCreateInput } from "../../../inputs/AttestationConfidenceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceCreateInput, {
    nullable: false
  })
  data!: AttestationConfidenceCreateInput;
}
