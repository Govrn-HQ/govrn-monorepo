import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Contribution } from "../models/Contribution";
import { ContributionStatusCount } from "../resolvers/outputs/ContributionStatusCount";

@TypeGraphQL.ObjectType("ContributionStatus", {
  isAbstract: true
})
export class ContributionStatus {
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

  contributions?: Contribution[];

  @TypeGraphQL.Field(_type => ContributionStatusCount, {
    nullable: true
  })
  _count?: ContributionStatusCount | null;
}
