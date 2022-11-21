import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusCreateInput } from "../../../inputs/AttestationStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusCreateInput, {
    nullable: false
  })
  data!: AttestationStatusCreateInput;
}
