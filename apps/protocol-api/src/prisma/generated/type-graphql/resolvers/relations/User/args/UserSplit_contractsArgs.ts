import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractOrderByWithRelationInput } from "../../../inputs/UserSplitContractOrderByWithRelationInput";
import { UserSplitContractWhereInput } from "../../../inputs/UserSplitContractWhereInput";
import { UserSplitContractWhereUniqueInput } from "../../../inputs/UserSplitContractWhereUniqueInput";
import { UserSplitContractScalarFieldEnum } from "../../../../enums/UserSplitContractScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserSplit_contractsArgs {
  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  where?: UserSplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserSplitContractOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserSplitContractWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "user_id" | "enabled"> | undefined;
}
