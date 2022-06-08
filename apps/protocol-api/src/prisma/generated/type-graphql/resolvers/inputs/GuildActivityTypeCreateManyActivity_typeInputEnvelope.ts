import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateManyActivity_typeInput } from "../inputs/GuildActivityTypeCreateManyActivity_typeInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateManyActivity_typeInputEnvelope", {
  isAbstract: true
})
export class GuildActivityTypeCreateManyActivity_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateManyActivity_typeInput], {
    nullable: false
  })
  data!: GuildActivityTypeCreateManyActivity_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
