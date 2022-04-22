import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyProjectInput } from "../inputs/LinearIssueCreateManyProjectInput";

@TypeGraphQL.InputType("LinearIssueCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class LinearIssueCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [LinearIssueCreateManyProjectInput], {
    nullable: false
  })
  data!: LinearIssueCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
