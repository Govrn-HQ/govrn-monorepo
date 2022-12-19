import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportOrderByWithRelationInput } from "../../../inputs/GuildImportOrderByWithRelationInput";
import { GuildImportWhereInput } from "../../../inputs/GuildImportWhereInput";
import { GuildImportWhereUniqueInput } from "../../../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  where?: GuildImportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildImportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildImportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildImportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
