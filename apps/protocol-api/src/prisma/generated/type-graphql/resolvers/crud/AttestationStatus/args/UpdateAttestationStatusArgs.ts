import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusUpdateInput } from "../../../inputs/AttestationStatusUpdateInput";
import { AttestationStatusWhereUniqueInput } from "../../../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusUpdateInput, {
    nullable: false
  })
  data!: AttestationStatusUpdateInput;

  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationStatusWhereUniqueInput;
}
