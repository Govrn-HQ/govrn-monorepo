import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("LinearJobRunWhereInput", {
  isAbstract: true
})
export class LinearJobRunWhereInput {
  @TypeGraphQL.Field(_type => [LinearJobRunWhereInput], {
    nullable: true
  })
  AND?: LinearJobRunWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunWhereInput], {
    nullable: true
  })
  OR?: LinearJobRunWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunWhereInput], {
    nullable: true
  })
  NOT?: LinearJobRunWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  completedDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startDate?: DateTimeFilter | undefined;
}
