import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusWhereUniqueInput } from "../../../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationStatusWhereUniqueInput;
}
