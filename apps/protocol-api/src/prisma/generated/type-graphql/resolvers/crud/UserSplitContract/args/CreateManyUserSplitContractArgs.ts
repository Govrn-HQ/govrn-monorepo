import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractCreateManyInput } from "../../../inputs/UserSplitContractCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserSplitContractArgs {
  @TypeGraphQL.Field(_type => [UserSplitContractCreateManyInput], {
    nullable: false
  })
  data!: UserSplitContractCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
