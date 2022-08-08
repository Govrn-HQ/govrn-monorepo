import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("AttestationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AttestationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AttestationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AttestationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AttestationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AttestationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  confidence_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  contribution_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date_of_attestation?: DateTimeWithAggregatesFilter | undefined;
}
