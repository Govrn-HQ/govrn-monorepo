import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateManyUserInput } from "../inputs/UserSplitContractCreateManyUserInput";

@TypeGraphQL.InputType("UserSplitContractCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserSplitContractCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserSplitContractCreateManyUserInput], {
    nullable: false
  })
  data!: UserSplitContractCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
