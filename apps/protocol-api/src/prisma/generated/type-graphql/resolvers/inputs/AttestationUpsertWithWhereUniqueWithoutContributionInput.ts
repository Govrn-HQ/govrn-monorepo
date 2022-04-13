import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutContributionInput } from "../inputs/AttestationCreateWithoutContributionInput";
import { AttestationUpdateWithoutContributionInput } from "../inputs/AttestationUpdateWithoutContributionInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpsertWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class AttestationUpsertWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutContributionInput, {
    nullable: false
  })
  update!: AttestationUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutContributionInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutContributionInput;
}
