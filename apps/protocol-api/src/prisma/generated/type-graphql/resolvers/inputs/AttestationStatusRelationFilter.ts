import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusWhereInput } from "../inputs/AttestationStatusWhereInput";

@TypeGraphQL.InputType("AttestationStatusRelationFilter", {
  isAbstract: true
})
export class AttestationStatusRelationFilter {
  @TypeGraphQL.Field(_type => AttestationStatusWhereInput, {
    nullable: true
  })
  is?: AttestationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusWhereInput, {
    nullable: true
  })
  isNot?: AttestationStatusWhereInput | undefined;
}
