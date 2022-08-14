import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationUpdateWithoutConfidenceInput } from "../inputs/AttestationUpdateWithoutConfidenceInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateWithWhereUniqueWithoutConfidenceInput", {
  isAbstract: true
})
export class AttestationUpdateWithWhereUniqueWithoutConfidenceInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutConfidenceInput, {
    nullable: false
  })
  data!: AttestationUpdateWithoutConfidenceInput;
}
