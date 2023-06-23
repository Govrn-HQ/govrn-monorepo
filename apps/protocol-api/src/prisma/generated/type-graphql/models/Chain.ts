import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Contribution } from "../models/Contribution";
import { SplitContract } from "../models/SplitContract";
import { ChainCount } from "../resolvers/outputs/ChainCount";

@TypeGraphQL.ObjectType("Chain", {
  isAbstract: true
})
export class Chain {
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
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chain_id!: string;

  contributions?: Contribution[];

  split_contracts?: SplitContract[];

  @TypeGraphQL.Field(_type => ChainCount, {
    nullable: true
  })
  _count?: ChainCount | null;
}
