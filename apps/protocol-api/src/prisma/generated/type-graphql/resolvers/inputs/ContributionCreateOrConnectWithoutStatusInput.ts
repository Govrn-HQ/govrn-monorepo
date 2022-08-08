import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutStatusInput } from "../inputs/ContributionCreateWithoutStatusInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateOrConnectWithoutStatusInput", {
  isAbstract: true
})
export class ContributionCreateOrConnectWithoutStatusInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutStatusInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutStatusInput;
}
