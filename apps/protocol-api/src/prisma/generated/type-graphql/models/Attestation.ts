import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { AttestationConfidence } from "../models/AttestationConfidence";
import { AttestationStatus } from "../models/AttestationStatus";
import { Contribution } from "../models/Contribution";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Attestation", {
  isAbstract: true
})
export class Attestation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  confidence_id?: number | null;

  confidence?: AttestationConfidence | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  contribution?: Contribution;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_attestation!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attestation_status_id?: number | null;

  attestation_status?: AttestationStatus | null;
}
