import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GuildImportStatusScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildImportStatusScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildImportStatusScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildImportStatusScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildImportStatusScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildImportStatusScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
