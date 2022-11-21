import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusCreateOrConnectWithoutAttestationInput } from "../inputs/AttestationStatusCreateOrConnectWithoutAttestationInput";
import { AttestationStatusCreateWithoutAttestationInput } from "../inputs/AttestationStatusCreateWithoutAttestationInput";
import { AttestationStatusUpdateWithoutAttestationInput } from "../inputs/AttestationStatusUpdateWithoutAttestationInput";
import { AttestationStatusUpsertWithoutAttestationInput } from "../inputs/AttestationStatusUpsertWithoutAttestationInput";
import { AttestationStatusWhereUniqueInput } from "../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.InputType("AttestationStatusUpdateOneWithoutAttestationInput", {
  isAbstract: true
})
export class AttestationStatusUpdateOneWithoutAttestationInput {
  @TypeGraphQL.Field(_type => AttestationStatusCreateWithoutAttestationInput, {
    nullable: true
  })
  create?: AttestationStatusCreateWithoutAttestationInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusCreateOrConnectWithoutAttestationInput, {
    nullable: true
  })
  connectOrCreate?: AttestationStatusCreateOrConnectWithoutAttestationInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusUpsertWithoutAttestationInput, {
    nullable: true
  })
  upsert?: AttestationStatusUpsertWithoutAttestationInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: AttestationStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusUpdateWithoutAttestationInput, {
    nullable: true
  })
  update?: AttestationStatusUpdateWithoutAttestationInput | undefined;
}
