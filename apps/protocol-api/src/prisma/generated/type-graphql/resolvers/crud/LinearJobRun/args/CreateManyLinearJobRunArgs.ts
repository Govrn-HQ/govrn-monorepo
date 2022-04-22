import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunCreateManyInput } from "../../../inputs/LinearJobRunCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLinearJobRunArgs {
  @TypeGraphQL.Field(_type => [LinearJobRunCreateManyInput], {
    nullable: false
  })
  data!: LinearJobRunCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
