import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutGuildsInput } from "../inputs/ContributionCreateOrConnectWithoutGuildsInput";
import { ContributionCreateWithoutGuildsInput } from "../inputs/ContributionCreateWithoutGuildsInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedOneWithoutGuildsInput", {
  isAbstract: true
})
export class ContributionCreateNestedOneWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutGuildsInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutGuildsInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;
}
