import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationListRelationFilter } from "../inputs/AttestationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AttestationConfidenceWhereInput", {
  isAbstract: true
})
export class AttestationConfidenceWhereInput {
  @TypeGraphQL.Field(_type => [AttestationConfidenceWhereInput], {
    nullable: true
  })
  AND?: AttestationConfidenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationConfidenceWhereInput], {
    nullable: true
  })
  OR?: AttestationConfidenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationConfidenceWhereInput], {
    nullable: true
  })
  NOT?: AttestationConfidenceWhereInput[] | undefined;

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
  attestations?: AttestationListRelationFilter | undefined;
}
