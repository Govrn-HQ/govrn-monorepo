import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationUpdateWithoutUserInput } from "../inputs/AttestationUpdateWithoutUserInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class AttestationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: AttestationUpdateWithoutUserInput;
}
