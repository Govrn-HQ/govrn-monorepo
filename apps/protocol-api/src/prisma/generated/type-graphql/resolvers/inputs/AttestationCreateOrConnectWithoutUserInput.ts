import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutUserInput } from "../inputs/AttestationCreateWithoutUserInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class AttestationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutUserInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutUserInput;
}
