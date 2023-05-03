import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeWhereInput } from "../../../inputs/CanonicalGuildActivityTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  where?: CanonicalGuildActivityTypeWhereInput | undefined;
}
