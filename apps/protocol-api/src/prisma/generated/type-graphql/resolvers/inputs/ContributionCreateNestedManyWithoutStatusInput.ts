import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyStatusInputEnvelope } from "../inputs/ContributionCreateManyStatusInputEnvelope";
import { ContributionCreateOrConnectWithoutStatusInput } from "../inputs/ContributionCreateOrConnectWithoutStatusInput";
import { ContributionCreateWithoutStatusInput } from "../inputs/ContributionCreateWithoutStatusInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedManyWithoutStatusInput", {
  isAbstract: true
})
export class ContributionCreateNestedManyWithoutStatusInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutStatusInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutStatusInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyStatusInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput[] | undefined;
}
