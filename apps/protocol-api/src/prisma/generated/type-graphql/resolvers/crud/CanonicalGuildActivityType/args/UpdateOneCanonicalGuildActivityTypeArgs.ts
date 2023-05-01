import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeUpdateInput } from "../../../inputs/CanonicalGuildActivityTypeUpdateInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../../../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateInput, {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeUpdateInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;
}
