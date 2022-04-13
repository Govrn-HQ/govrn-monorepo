import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyActivity_typeInput } from "../inputs/ContributionCreateManyActivity_typeInput";

@TypeGraphQL.InputType("ContributionCreateManyActivity_typeInputEnvelope", {
  isAbstract: true
})
export class ContributionCreateManyActivity_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [ContributionCreateManyActivity_typeInput], {
    nullable: false
  })
  data!: ContributionCreateManyActivity_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
