import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedManyWithoutChainInput } from "../inputs/ContributionCreateNestedManyWithoutChainInput";

@TypeGraphQL.InputType("ChainCreateInput", {
  isAbstract: true
})
export class ChainCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chain_id!: string;

  @TypeGraphQL.Field(_type => ContributionCreateNestedManyWithoutChainInput, {
    nullable: true
  })
  contributions?: ContributionCreateNestedManyWithoutChainInput | undefined;
}
