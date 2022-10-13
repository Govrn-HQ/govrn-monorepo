import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyChainInput } from "../inputs/ContributionCreateManyChainInput";

@TypeGraphQL.InputType("ContributionCreateManyChainInputEnvelope", {
  isAbstract: true
})
export class ContributionCreateManyChainInputEnvelope {
  @TypeGraphQL.Field(_type => [ContributionCreateManyChainInput], {
    nullable: false
  })
  data!: ContributionCreateManyChainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
