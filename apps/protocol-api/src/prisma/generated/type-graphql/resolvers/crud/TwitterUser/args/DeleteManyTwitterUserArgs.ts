import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;
}
