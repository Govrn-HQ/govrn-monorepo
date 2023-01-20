import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusOrderByWithRelationInput } from "../../../inputs/GuildImportStatusOrderByWithRelationInput";
import { GuildImportStatusWhereInput } from "../../../inputs/GuildImportStatusWhereInput";
import { GuildImportStatusWhereUniqueInput } from "../../../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereInput, {
    nullable: true
  })
  where?: GuildImportStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildImportStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildImportStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
