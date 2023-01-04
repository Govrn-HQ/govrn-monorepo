import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationCreateInput } from "../../../inputs/AttestationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationCreateInput, {
    nullable: false
  })
  data!: AttestationCreateInput;
}
