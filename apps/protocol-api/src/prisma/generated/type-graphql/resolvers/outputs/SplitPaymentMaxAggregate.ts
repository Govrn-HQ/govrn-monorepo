import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SplitPaymentMaxAggregate", {
  isAbstract: true
})
export class SplitPaymentMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token_address!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  amount!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tx_hash!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sender_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recipient_address!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sender_user_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  split_contract_id!: number | null;
}
