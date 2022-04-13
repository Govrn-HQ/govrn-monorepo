import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationWhereInput } from "../../../inputs/AttestationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true
  })
  where?: AttestationWhereInput | undefined;
}
