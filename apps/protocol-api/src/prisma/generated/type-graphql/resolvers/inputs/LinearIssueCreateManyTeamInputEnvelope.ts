import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyTeamInput } from "../inputs/LinearIssueCreateManyTeamInput";

@TypeGraphQL.InputType("LinearIssueCreateManyTeamInputEnvelope", {
  isAbstract: true
})
export class LinearIssueCreateManyTeamInputEnvelope {
  @TypeGraphQL.Field(_type => [LinearIssueCreateManyTeamInput], {
    nullable: false
  })
  data!: LinearIssueCreateManyTeamInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
