import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserScalarWhereInput } from "../inputs/GuildUserScalarWhereInput";
import { GuildUserUpdateManyMutationInput } from "../inputs/GuildUserUpdateManyMutationInput";

@TypeGraphQL.InputType("GuildUserUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class GuildUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => GuildUserScalarWhereInput, {
    nullable: false
  })
  where!: GuildUserScalarWhereInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildUserUpdateManyMutationInput;
}
