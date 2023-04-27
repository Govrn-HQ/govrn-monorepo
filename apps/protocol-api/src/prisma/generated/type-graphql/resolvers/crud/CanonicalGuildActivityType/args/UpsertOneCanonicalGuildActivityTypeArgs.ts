import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeCreateInput } from "../../../inputs/CanonicalGuildActivityTypeCreateInput";
import { CanonicalGuildActivityTypeUpdateInput } from "../../../inputs/CanonicalGuildActivityTypeUpdateInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../../../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateInput, {
    nullable: false
  })
  create!: CanonicalGuildActivityTypeCreateInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateInput, {
    nullable: false
  })
  update!: CanonicalGuildActivityTypeUpdateInput;
}
