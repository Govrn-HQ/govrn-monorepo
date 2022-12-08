import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusWhereInput } from "../inputs/GuildVerificationStatusWhereInput";

@TypeGraphQL.InputType("GuildVerificationStatusRelationFilter", {
  isAbstract: true
})
export class GuildVerificationStatusRelationFilter {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereInput, {
    nullable: true
  })
  is?: GuildVerificationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereInput, {
    nullable: true
  })
  isNot?: GuildVerificationStatusWhereInput | undefined;
}
