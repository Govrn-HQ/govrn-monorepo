import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyCycleInput } from "../inputs/LinearIssueCreateManyCycleInput";

@TypeGraphQL.InputType("LinearIssueCreateManyCycleInputEnvelope", {
  isAbstract: true
})
export class LinearIssueCreateManyCycleInputEnvelope {
  @TypeGraphQL.Field(_type => [LinearIssueCreateManyCycleInput], {
    nullable: false
  })
  data!: LinearIssueCreateManyCycleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
