import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("UserActivityScalarWhereInput", {
  isAbstract: true
})
export class UserActivityScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserActivityScalarWhereInput], {
    nullable: true
  })
  AND?: UserActivityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarWhereInput], {
    nullable: true
  })
  OR?: UserActivityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarWhereInput], {
    nullable: true
  })
  NOT?: UserActivityScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  activity_type_id?: IntFilter | undefined;
}
