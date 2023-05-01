import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeOrderByWithRelationInput } from "../../../inputs/CanonicalGuildActivityTypeOrderByWithRelationInput";
import { CanonicalGuildActivityTypeWhereInput } from "../../../inputs/CanonicalGuildActivityTypeWhereInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../../../inputs/CanonicalGuildActivityTypeWhereUniqueInput";
import { CanonicalGuildActivityTypeScalarFieldEnum } from "../../../../enums/CanonicalGuildActivityTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  where?: CanonicalGuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CanonicalGuildActivityTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: CanonicalGuildActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "guild_id" | "guild_activity_type_id"> | undefined;
}
