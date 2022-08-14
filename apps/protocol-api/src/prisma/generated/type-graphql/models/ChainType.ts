import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { ChainTypeCount } from "../resolvers/outputs/ChainTypeCount";

@TypeGraphQL.ObjectType("ChainType", {
  isAbstract: true
})
export class ChainType {
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

  users?: User[];

  @TypeGraphQL.Field(_type => ChainTypeCount, {
    nullable: true
  })
  _count?: ChainTypeCount | null;
}
