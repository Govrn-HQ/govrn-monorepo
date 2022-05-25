import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterAccountUpdateManyMutationInput } from "../../../inputs/TwitterAccountUpdateManyMutationInput";
import { TwitterAccountWhereInput } from "../../../inputs/TwitterAccountWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterAccountUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true
  })
  where?: TwitterAccountWhereInput | undefined;
}
