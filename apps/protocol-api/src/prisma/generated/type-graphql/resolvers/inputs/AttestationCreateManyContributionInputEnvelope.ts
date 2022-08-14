import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyContributionInput } from "../inputs/AttestationCreateManyContributionInput";

@TypeGraphQL.InputType("AttestationCreateManyContributionInputEnvelope", {
  isAbstract: true
})
export class AttestationCreateManyContributionInputEnvelope {
  @TypeGraphQL.Field(_type => [AttestationCreateManyContributionInput], {
    nullable: false
  })
  data!: AttestationCreateManyContributionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
