import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationCreateInput } from "../../../inputs/AttestationCreateInput";
import { AttestationUpdateInput } from "../../../inputs/AttestationUpdateInput";
import { AttestationWhereUniqueInput } from "../../../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationCreateInput, {
    nullable: false
  })
  create!: AttestationCreateInput;

  @TypeGraphQL.Field(_type => AttestationUpdateInput, {
    nullable: false
  })
  update!: AttestationUpdateInput;
}
