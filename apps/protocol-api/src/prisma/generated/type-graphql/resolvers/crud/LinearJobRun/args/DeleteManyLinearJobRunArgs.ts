import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunWhereInput } from "../../../inputs/LinearJobRunWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunWhereInput, {
    nullable: true
  })
  where?: LinearJobRunWhereInput | undefined;
}
