import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutConfidenceInput } from "../inputs/AttestationCreateWithoutConfidenceInput";
import { AttestationUpdateWithoutConfidenceInput } from "../inputs/AttestationUpdateWithoutConfidenceInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpsertWithWhereUniqueWithoutConfidenceInput", {
  isAbstract: true
})
export class AttestationUpsertWithWhereUniqueWithoutConfidenceInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutConfidenceInput, {
    nullable: false
  })
  update!: AttestationUpdateWithoutConfidenceInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutConfidenceInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutConfidenceInput;
}
