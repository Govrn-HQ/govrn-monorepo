import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractCreateManyInput } from "../../../inputs/SplitContractCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySplitContractArgs {
  @TypeGraphQL.Field(_type => [SplitContractCreateManyInput], {
    nullable: false
  })
  data!: SplitContractCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
