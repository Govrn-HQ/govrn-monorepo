import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearUserWhereInput } from "../../../inputs/LinearUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  where?: LinearUserWhereInput | undefined;
}
