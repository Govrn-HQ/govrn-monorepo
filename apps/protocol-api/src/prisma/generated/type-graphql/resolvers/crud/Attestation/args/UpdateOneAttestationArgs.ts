import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationUpdateInput } from "../../../inputs/AttestationUpdateInput";
import { AttestationWhereUniqueInput } from "../../../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationUpdateInput, {
    nullable: false
  })
  data!: AttestationUpdateInput;

  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;
}
