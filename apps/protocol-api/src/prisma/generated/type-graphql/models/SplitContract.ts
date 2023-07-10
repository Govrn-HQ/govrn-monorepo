import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Chain } from "../models/Chain";
import { SplitPayment } from "../models/SplitPayment";
import { UserSplitContract } from "../models/UserSplitContract";
import { SplitContractCount } from "../resolvers/outputs/SplitContractCount";

@TypeGraphQL.ObjectType("SplitContract", {
  isAbstract: true
})
export class SplitContract {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  chain_id!: number;

  chain?: Chain;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  split_payments?: SplitPayment[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_split_contract_id?: number | null;

  user_split_contract?: UserSplitContract | null;

  @TypeGraphQL.Field(_type => SplitContractCount, {
    nullable: true
  })
  _count?: SplitContractCount | null;
}
