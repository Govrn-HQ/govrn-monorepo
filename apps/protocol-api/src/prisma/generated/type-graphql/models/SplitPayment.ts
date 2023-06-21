import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { SplitContract } from "../models/SplitContract";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("SplitPayment", {
  isAbstract: true
})
export class SplitPayment {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token_address!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  amount!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sender_address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  recipient_address!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sender_user_id?: number | null;

  sender_user?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  split_contract_id!: number;

  split_contract?: SplitContract;
}
