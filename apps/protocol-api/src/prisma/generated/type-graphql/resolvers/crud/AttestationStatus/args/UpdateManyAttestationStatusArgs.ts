import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusUpdateManyMutationInput } from "../../../inputs/AttestationStatusUpdateManyMutationInput";
import { AttestationStatusWhereInput } from "../../../inputs/AttestationStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttestationStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AttestationStatusWhereInput, {
    nullable: true
  })
  where?: AttestationStatusWhereInput | undefined;
}
