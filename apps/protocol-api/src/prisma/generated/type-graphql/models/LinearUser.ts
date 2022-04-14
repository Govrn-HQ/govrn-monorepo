import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LinearIssue } from "../models/LinearIssue";
import { User } from "../models/User";
import { LinearUserCount } from "../resolvers/outputs/LinearUserCount";

@TypeGraphQL.ObjectType("LinearUser", {
  isAbstract: true
})
export class LinearUser {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  user?: User | null;

  assingned_issues?: LinearIssue[];

  created_issues?: LinearIssue[];

  @TypeGraphQL.Field(_type => LinearUserCount, {
    nullable: true
  })
  _count?: LinearUserCount | null;
}
