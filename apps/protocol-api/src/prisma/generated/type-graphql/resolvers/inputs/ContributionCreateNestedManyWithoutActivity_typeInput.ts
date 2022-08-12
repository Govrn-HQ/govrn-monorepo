import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyActivity_typeInputEnvelope } from "../inputs/ContributionCreateManyActivity_typeInputEnvelope";
import { ContributionCreateOrConnectWithoutActivity_typeInput } from "../inputs/ContributionCreateOrConnectWithoutActivity_typeInput";
import { ContributionCreateWithoutActivity_typeInput } from "../inputs/ContributionCreateWithoutActivity_typeInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedManyWithoutActivity_typeInput", {
  isAbstract: true
})
export class ContributionCreateNestedManyWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutActivity_typeInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutActivity_typeInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyActivity_typeInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyActivity_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput[] | undefined;
}
