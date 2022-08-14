import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityTypeUpdateManyMutationInput } from "../../../inputs/CategoryActivityTypeUpdateManyMutationInput";
import { CategoryActivityTypeWhereInput } from "../../../inputs/CategoryActivityTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoryActivityTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true
  })
  where?: CategoryActivityTypeWhereInput | undefined;
}
