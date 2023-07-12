import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractChain_idUser_split_contract_idCompoundUniqueInput } from "../inputs/SplitContractChain_idUser_split_contract_idCompoundUniqueInput";

@TypeGraphQL.InputType("SplitContractWhereUniqueInput", {
  isAbstract: true
})
export class SplitContractWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => SplitContractChain_idUser_split_contract_idCompoundUniqueInput, {
    nullable: true
  })
  chain_id_user_split_contract_id?: SplitContractChain_idUser_split_contract_idCompoundUniqueInput | undefined;
}
