import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationWhereUniqueInput } from "../../../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAttestationOrThrowArgs {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;
}
