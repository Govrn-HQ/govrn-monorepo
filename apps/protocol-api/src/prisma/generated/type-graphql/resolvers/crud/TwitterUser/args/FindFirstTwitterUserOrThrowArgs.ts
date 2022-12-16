import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserOrderByWithRelationInput } from "../../../inputs/TwitterUserOrderByWithRelationInput";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";
import { TwitterUserWhereUniqueInput } from "../../../inputs/TwitterUserWhereUniqueInput";
import { TwitterUserScalarFieldEnum } from "../../../../enums/TwitterUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTwitterUserOrThrowArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TwitterUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitterUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "twitter_user_id" | "name" | "username" | "description" | "user_id"> | undefined;
}
