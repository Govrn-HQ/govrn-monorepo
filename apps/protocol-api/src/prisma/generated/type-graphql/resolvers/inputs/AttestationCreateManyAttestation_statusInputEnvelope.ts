import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyAttestation_statusInput } from "../inputs/AttestationCreateManyAttestation_statusInput";

@TypeGraphQL.InputType("AttestationCreateManyAttestation_statusInputEnvelope", {
  isAbstract: true
})
export class AttestationCreateManyAttestation_statusInputEnvelope {
  @TypeGraphQL.Field(_type => [AttestationCreateManyAttestation_statusInput], {
    nullable: false
  })
  data!: AttestationCreateManyAttestation_statusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
