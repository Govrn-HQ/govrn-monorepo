import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyUserInputEnvelope } from "../inputs/ContributionCreateManyUserInputEnvelope";
import { ContributionCreateOrConnectWithoutUserInput } from "../inputs/ContributionCreateOrConnectWithoutUserInput";
import { ContributionCreateWithoutUserInput } from "../inputs/ContributionCreateWithoutUserInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ContributionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutUserInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput[] | undefined;
}
