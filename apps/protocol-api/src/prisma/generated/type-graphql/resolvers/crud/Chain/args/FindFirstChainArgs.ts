import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainOrderByWithRelationInput } from "../../../inputs/ChainOrderByWithRelationInput";
import { ChainWhereInput } from "../../../inputs/ChainWhereInput";
import { ChainWhereUniqueInput } from "../../../inputs/ChainWhereUniqueInput";
import { ChainScalarFieldEnum } from "../../../../enums/ChainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstChainArgs {
  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  where?: ChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChainOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChainOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ChainScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "chain_id"> | undefined;
}
