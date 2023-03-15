import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateManyVerificationStatusInput } from "../inputs/GuildContributionCreateManyVerificationStatusInput";

@TypeGraphQL.InputType("GuildContributionCreateManyVerificationStatusInputEnvelope", {
  isAbstract: true
})
export class GuildContributionCreateManyVerificationStatusInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildContributionCreateManyVerificationStatusInput], {
    nullable: false
  })
  data!: GuildContributionCreateManyVerificationStatusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
