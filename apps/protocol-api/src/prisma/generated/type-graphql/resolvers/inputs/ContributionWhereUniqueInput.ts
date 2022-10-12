import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionChain_idOn_chain_idCompoundUniqueInput } from "../inputs/ContributionChain_idOn_chain_idCompoundUniqueInput";

@TypeGraphQL.InputType("ContributionWhereUniqueInput", {
  isAbstract: true
})
export class ContributionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ContributionChain_idOn_chain_idCompoundUniqueInput, {
    nullable: true
  })
  chain_id_on_chain_id?: ContributionChain_idOn_chain_idCompoundUniqueInput | undefined;
}
