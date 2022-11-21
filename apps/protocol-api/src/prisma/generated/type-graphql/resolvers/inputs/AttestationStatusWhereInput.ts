import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationListRelationFilter } from "../inputs/AttestationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AttestationStatusWhereInput", {
  isAbstract: true
})
export class AttestationStatusWhereInput {
  @TypeGraphQL.Field(_type => [AttestationStatusWhereInput], {
    nullable: true
  })
  AND?: AttestationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationStatusWhereInput], {
    nullable: true
  })
  OR?: AttestationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationStatusWhereInput], {
    nullable: true
  })
  NOT?: AttestationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationListRelationFilter, {
    nullable: true
  })
  attestation?: AttestationListRelationFilter | undefined;
}
