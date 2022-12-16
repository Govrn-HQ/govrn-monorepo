import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutActivity_typeInput } from "../inputs/GuildCreateOrConnectWithoutActivity_typeInput";
import { GuildCreateWithoutActivity_typeInput } from "../inputs/GuildCreateWithoutActivity_typeInput";
import { GuildUpdateWithoutActivity_typeInput } from "../inputs/GuildUpdateWithoutActivity_typeInput";
import { GuildUpsertWithoutActivity_typeInput } from "../inputs/GuildUpsertWithoutActivity_typeInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneRequiredWithoutActivity_typeNestedInput", {
  isAbstract: true
})
export class GuildUpdateOneRequiredWithoutActivity_typeNestedInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutActivity_typeInput, {
    nullable: true
  })
  create?: GuildCreateWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutActivity_typeInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutActivity_typeInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutActivity_typeInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutActivity_typeInput | undefined;
}
