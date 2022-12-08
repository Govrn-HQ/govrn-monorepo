import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildScalarWhereInput } from "../inputs/GuildScalarWhereInput";
import { GuildUpdateManyMutationInput } from "../inputs/GuildUpdateManyMutationInput";

@TypeGraphQL.InputType("GuildUpdateManyWithWhereWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildUpdateManyWithWhereWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildScalarWhereInput, {
    nullable: false
  })
  where!: GuildScalarWhereInput;

  @TypeGraphQL.Field(_type => GuildUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildUpdateManyMutationInput;
}
