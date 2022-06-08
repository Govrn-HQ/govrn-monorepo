import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutActivity_typeInput } from "../inputs/GuildCreateOrConnectWithoutActivity_typeInput";
import { GuildCreateWithoutActivity_typeInput } from "../inputs/GuildCreateWithoutActivity_typeInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutActivity_typeInput, {
    nullable: true
  })
  create?: GuildCreateWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutActivity_typeInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
