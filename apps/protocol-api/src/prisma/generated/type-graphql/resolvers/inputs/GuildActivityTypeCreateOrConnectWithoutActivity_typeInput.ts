import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateWithoutActivity_typeInput } from "../inputs/GuildActivityTypeCreateWithoutActivity_typeInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateOrConnectWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateOrConnectWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutActivity_typeInput, {
    nullable: false
  })
  create!: GuildActivityTypeCreateWithoutActivity_typeInput;
}
