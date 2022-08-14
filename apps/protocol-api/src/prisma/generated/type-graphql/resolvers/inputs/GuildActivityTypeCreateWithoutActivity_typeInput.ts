import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutActivity_typeInput } from "../inputs/GuildCreateNestedOneWithoutActivity_typeInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutActivity_typeInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutActivity_typeInput;
}
