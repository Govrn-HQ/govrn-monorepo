import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../../../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;
}
