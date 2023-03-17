import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceRelationFilter } from "../inputs/AttestationConfidenceRelationFilter";
import { AttestationStatusRelationFilter } from "../inputs/AttestationStatusRelationFilter";
import { ContributionRelationFilter } from "../inputs/ContributionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("AttestationWhereInput", {
  isAbstract: true
})
export class AttestationWhereInput {
  @TypeGraphQL.Field(_type => [AttestationWhereInput], {
    nullable: true
  })
  AND?: AttestationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereInput], {
    nullable: true
  })
  OR?: AttestationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereInput], {
    nullable: true
  })
  NOT?: AttestationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  confidence_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceRelationFilter, {
    nullable: true
  })
  confidence?: AttestationConfidenceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true
  })
  contribution?: ContributionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  attestation_status_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusRelationFilter, {
    nullable: true
  })
  attestation_status?: AttestationStatusRelationFilter | undefined;
}
