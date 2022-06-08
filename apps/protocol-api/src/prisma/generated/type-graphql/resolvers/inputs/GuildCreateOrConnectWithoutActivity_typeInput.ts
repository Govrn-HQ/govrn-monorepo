import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutActivity_typeInput } from "../inputs/GuildCreateWithoutActivity_typeInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutActivity_typeInput, {
    nullable: false
  })
  create!: GuildCreateWithoutActivity_typeInput;
}
