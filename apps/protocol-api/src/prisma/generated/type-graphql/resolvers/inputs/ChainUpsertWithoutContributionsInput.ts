import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutContributionsInput } from "../inputs/ChainCreateWithoutContributionsInput";
import { ChainUpdateWithoutContributionsInput } from "../inputs/ChainUpdateWithoutContributionsInput";

@TypeGraphQL.InputType("ChainUpsertWithoutContributionsInput", {
  isAbstract: true
})
export class ChainUpsertWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ChainUpdateWithoutContributionsInput, {
    nullable: false
  })
  update!: ChainUpdateWithoutContributionsInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutContributionsInput, {
    nullable: false
  })
  create!: ChainCreateWithoutContributionsInput;
}
