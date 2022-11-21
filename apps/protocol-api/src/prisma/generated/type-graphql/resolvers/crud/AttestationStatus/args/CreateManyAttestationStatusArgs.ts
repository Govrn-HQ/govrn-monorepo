import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusCreateManyInput } from "../../../inputs/AttestationStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAttestationStatusArgs {
  @TypeGraphQL.Field(_type => [AttestationStatusCreateManyInput], {
    nullable: false
  })
  data!: AttestationStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
