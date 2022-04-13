import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyUserInputEnvelope } from "../inputs/AttestationCreateManyUserInputEnvelope";
import { AttestationCreateOrConnectWithoutUserInput } from "../inputs/AttestationCreateOrConnectWithoutUserInput";
import { AttestationCreateWithoutUserInput } from "../inputs/AttestationCreateWithoutUserInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class AttestationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutUserInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;
}
