import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutAttestationsInput } from "../inputs/ContributionCreateOrConnectWithoutAttestationsInput";
import { ContributionCreateWithoutAttestationsInput } from "../inputs/ContributionCreateWithoutAttestationsInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedOneWithoutAttestationsInput", {
  isAbstract: true
})
export class ContributionCreateNestedOneWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutAttestationsInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutAttestationsInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;
}
