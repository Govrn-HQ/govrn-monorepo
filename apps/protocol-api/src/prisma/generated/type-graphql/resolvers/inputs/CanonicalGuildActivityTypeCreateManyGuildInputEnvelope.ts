import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateManyGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateManyGuildInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateManyGuildInputEnvelope", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeCreateManyGuildInput], {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
