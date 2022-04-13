import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationWhereInput } from "../inputs/AttestationWhereInput";

@TypeGraphQL.InputType("AttestationListRelationFilter", {
  isAbstract: true
})
export class AttestationListRelationFilter {
  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true
  })
  every?: AttestationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true
  })
  some?: AttestationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true
  })
  none?: AttestationWhereInput | undefined;
}
