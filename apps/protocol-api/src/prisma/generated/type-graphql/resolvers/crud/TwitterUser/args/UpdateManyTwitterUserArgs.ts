import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserUpdateManyMutationInput } from "../../../inputs/TwitterUserUpdateManyMutationInput";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;
}
