import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeUpdateManyMutationInput } from "../../../inputs/CanonicalGuildActivityTypeUpdateManyMutationInput";
import { CanonicalGuildActivityTypeWhereInput } from "../../../inputs/CanonicalGuildActivityTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  where?: CanonicalGuildActivityTypeWhereInput | undefined;
}
