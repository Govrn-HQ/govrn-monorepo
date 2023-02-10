import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearUserOrderByWithRelationInput } from "../../../inputs/LinearUserOrderByWithRelationInput";
import { LinearUserWhereInput } from "../../../inputs/LinearUserWhereInput";
import { LinearUserWhereUniqueInput } from "../../../inputs/LinearUserWhereUniqueInput";
import { LinearUserScalarFieldEnum } from "../../../../enums/LinearUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  where?: LinearUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LinearUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: LinearUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LinearUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "active" | "createdAt" | "displayName" | "email" | "linear_id" | "name" | "url" | "access_token" | "active_token" | "user_id"> | undefined;
}
