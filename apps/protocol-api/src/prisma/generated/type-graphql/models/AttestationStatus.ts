import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attestation } from "../models/Attestation";
import { AttestationStatusCount } from "../resolvers/outputs/AttestationStatusCount";

@TypeGraphQL.ObjectType("AttestationStatus", {
  isAbstract: true
})
export class AttestationStatus {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  attestation?: Attestation[];

  @TypeGraphQL.Field(_type => AttestationStatusCount, {
    nullable: true
  })
  _count?: AttestationStatusCount | null;
}
