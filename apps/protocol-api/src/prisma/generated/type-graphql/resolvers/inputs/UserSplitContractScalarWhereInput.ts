import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("UserSplitContractScalarWhereInput", {
  isAbstract: true
})
export class UserSplitContractScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereInput], {
    nullable: true
  })
  AND?: UserSplitContractScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereInput], {
    nullable: true
  })
  OR?: UserSplitContractScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereInput], {
    nullable: true
  })
  NOT?: UserSplitContractScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  enabled?: BoolFilter | undefined;
}
