import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SplitContractListRelationFilter } from "../inputs/SplitContractListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserSplitContractWhereInput", {
  isAbstract: true
})
export class UserSplitContractWhereInput {
  @TypeGraphQL.Field(_type => [UserSplitContractWhereInput], {
    nullable: true
  })
  AND?: UserSplitContractWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereInput], {
    nullable: true
  })
  OR?: UserSplitContractWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereInput], {
    nullable: true
  })
  NOT?: UserSplitContractWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  enabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => SplitContractListRelationFilter, {
    nullable: true
  })
  split_contract?: SplitContractListRelationFilter | undefined;
}
