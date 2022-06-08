import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeScalarWhereInput } from "../inputs/GuildActivityTypeScalarWhereInput";
import { GuildActivityTypeUpdateManyMutationInput } from "../inputs/GuildActivityTypeUpdateManyMutationInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateManyWithWhereWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateManyWithWhereWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeScalarWhereInput, {
    nullable: false
  })
  where!: GuildActivityTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildActivityTypeUpdateManyMutationInput;
}
