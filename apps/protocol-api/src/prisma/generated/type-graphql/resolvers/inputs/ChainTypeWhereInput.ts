import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("ChainTypeWhereInput", {
  isAbstract: true
})
export class ChainTypeWhereInput {
  @TypeGraphQL.Field(_type => [ChainTypeWhereInput], {
    nullable: true
  })
  AND?: ChainTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainTypeWhereInput], {
    nullable: true
  })
  OR?: ChainTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainTypeWhereInput], {
    nullable: true
  })
  NOT?: ChainTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
