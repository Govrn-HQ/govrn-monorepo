import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyMembershipStatusInput } from "../inputs/GuildUserCreateManyMembershipStatusInput";

@TypeGraphQL.InputType("GuildUserCreateManyMembershipStatusInputEnvelope", {
  isAbstract: true
})
export class GuildUserCreateManyMembershipStatusInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildUserCreateManyMembershipStatusInput], {
    nullable: false
  })
  data!: GuildUserCreateManyMembershipStatusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
