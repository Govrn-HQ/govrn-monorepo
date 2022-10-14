import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionScalarWhereInput } from "../inputs/ContributionScalarWhereInput";
import { ContributionUpdateManyMutationInput } from "../inputs/ContributionUpdateManyMutationInput";

@TypeGraphQL.InputType("ContributionUpdateManyWithWhereWithoutChainInput", {
  isAbstract: true
})
export class ContributionUpdateManyWithWhereWithoutChainInput {
  @TypeGraphQL.Field(_type => ContributionScalarWhereInput, {
    nullable: false
  })
  where!: ContributionScalarWhereInput;

  @TypeGraphQL.Field(_type => ContributionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContributionUpdateManyMutationInput;
}
