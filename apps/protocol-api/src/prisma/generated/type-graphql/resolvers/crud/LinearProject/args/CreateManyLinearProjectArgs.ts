import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearProjectCreateManyInput } from "../../../inputs/LinearProjectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLinearProjectArgs {
  @TypeGraphQL.Field(_type => [LinearProjectCreateManyInput], {
    nullable: false
  })
  data!: LinearProjectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
