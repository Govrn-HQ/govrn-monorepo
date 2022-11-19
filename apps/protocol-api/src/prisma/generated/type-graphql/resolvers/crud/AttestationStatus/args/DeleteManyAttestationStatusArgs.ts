import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusWhereInput } from "../../../inputs/AttestationStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusWhereInput, {
    nullable: true
  })
  where?: AttestationStatusWhereInput | undefined;
}
