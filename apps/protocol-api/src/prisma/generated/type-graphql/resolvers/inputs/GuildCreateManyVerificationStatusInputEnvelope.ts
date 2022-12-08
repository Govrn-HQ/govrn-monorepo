import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateManyVerificationStatusInput } from "../inputs/GuildCreateManyVerificationStatusInput";

@TypeGraphQL.InputType("GuildCreateManyVerificationStatusInputEnvelope", {
  isAbstract: true
})
export class GuildCreateManyVerificationStatusInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildCreateManyVerificationStatusInput], {
    nullable: false
  })
  data!: GuildCreateManyVerificationStatusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
