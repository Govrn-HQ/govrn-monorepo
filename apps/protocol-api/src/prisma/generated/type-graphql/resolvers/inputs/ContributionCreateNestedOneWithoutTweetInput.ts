import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutTweetInput } from "../inputs/ContributionCreateOrConnectWithoutTweetInput";
import { ContributionCreateWithoutTweetInput } from "../inputs/ContributionCreateWithoutTweetInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateNestedOneWithoutTweetInput", {
  isAbstract: true
})
export class ContributionCreateNestedOneWithoutTweetInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutTweetInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutTweetInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;
}
