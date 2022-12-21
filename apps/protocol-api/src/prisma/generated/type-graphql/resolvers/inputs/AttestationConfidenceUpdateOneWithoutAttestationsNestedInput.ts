import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceCreateOrConnectWithoutAttestationsInput } from "../inputs/AttestationConfidenceCreateOrConnectWithoutAttestationsInput";
import { AttestationConfidenceCreateWithoutAttestationsInput } from "../inputs/AttestationConfidenceCreateWithoutAttestationsInput";
import { AttestationConfidenceUpdateWithoutAttestationsInput } from "../inputs/AttestationConfidenceUpdateWithoutAttestationsInput";
import { AttestationConfidenceUpsertWithoutAttestationsInput } from "../inputs/AttestationConfidenceUpsertWithoutAttestationsInput";
import { AttestationConfidenceWhereUniqueInput } from "../inputs/AttestationConfidenceWhereUniqueInput";

@TypeGraphQL.InputType("AttestationConfidenceUpdateOneWithoutAttestationsNestedInput", {
  isAbstract: true
})
export class AttestationConfidenceUpdateOneWithoutAttestationsNestedInput {
  @TypeGraphQL.Field(_type => AttestationConfidenceCreateWithoutAttestationsInput, {
    nullable: true
  })
  create?: AttestationConfidenceCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceCreateOrConnectWithoutAttestationsInput, {
    nullable: true
  })
  connectOrCreate?: AttestationConfidenceCreateOrConnectWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceUpsertWithoutAttestationsInput, {
    nullable: true
  })
  upsert?: AttestationConfidenceUpsertWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: true
  })
  connect?: AttestationConfidenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateWithoutAttestationsInput, {
    nullable: true
  })
  update?: AttestationConfidenceUpdateWithoutAttestationsInput | undefined;
}
