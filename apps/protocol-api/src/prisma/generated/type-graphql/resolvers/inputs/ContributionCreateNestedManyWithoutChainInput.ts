import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyChainInputEnvelope } from "../inputs/ContributionCreateManyChainInputEnvelope";
import { ContributionCreateOrConnectWithoutChainInput } from "../inputs/ContributionCreateOrConnectWithoutChainInput";
import { ContributionCreateWithoutChainInput } from "../inputs/ContributionCreateWithoutChainInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedManyWithoutChainInput", {
  isAbstract: true
})
export class ContributionCreateNestedManyWithoutChainInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutChainInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput[] | undefined;
}
