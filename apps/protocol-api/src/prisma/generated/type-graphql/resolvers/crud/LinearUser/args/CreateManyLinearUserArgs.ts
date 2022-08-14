import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearUserCreateManyInput } from "../../../inputs/LinearUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLinearUserArgs {
  @TypeGraphQL.Field(_type => [LinearUserCreateManyInput], {
    nullable: false
  })
  data!: LinearUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
