import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeCreateInput } from "../../../inputs/CanonicalGuildActivityTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateInput, {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeCreateInput;
}
