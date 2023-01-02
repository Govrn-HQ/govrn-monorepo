import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportScalarWhereInput } from "../inputs/GuildImportScalarWhereInput";
import { GuildImportUpdateManyMutationInput } from "../inputs/GuildImportUpdateManyMutationInput";

@TypeGraphQL.InputType("GuildImportUpdateManyWithWhereWithoutIntegration_typeInput", {
  isAbstract: true
})
export class GuildImportUpdateManyWithWhereWithoutIntegration_typeInput {
  @TypeGraphQL.Field(_type => GuildImportScalarWhereInput, {
    nullable: false
  })
  where!: GuildImportScalarWhereInput;

  @TypeGraphQL.Field(_type => GuildImportUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildImportUpdateManyMutationInput;
}
