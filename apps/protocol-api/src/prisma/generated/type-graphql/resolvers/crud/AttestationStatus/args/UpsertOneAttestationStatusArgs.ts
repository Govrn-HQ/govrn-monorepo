import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusCreateInput } from "../../../inputs/AttestationStatusCreateInput";
import { AttestationStatusUpdateInput } from "../../../inputs/AttestationStatusUpdateInput";
import { AttestationStatusWhereUniqueInput } from "../../../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationStatusCreateInput, {
    nullable: false
  })
  create!: AttestationStatusCreateInput;

  @TypeGraphQL.Field(_type => AttestationStatusUpdateInput, {
    nullable: false
  })
  update!: AttestationStatusUpdateInput;
}
