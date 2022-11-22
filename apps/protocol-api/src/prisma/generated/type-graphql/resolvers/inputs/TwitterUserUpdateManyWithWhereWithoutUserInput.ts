import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserScalarWhereInput } from "../inputs/TwitterUserScalarWhereInput";
import { TwitterUserUpdateManyMutationInput } from "../inputs/TwitterUserUpdateManyMutationInput";

@TypeGraphQL.InputType("TwitterUserUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class TwitterUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitterUserScalarWhereInput, {
    nullable: false
  })
  where!: TwitterUserScalarWhereInput;

  @TypeGraphQL.Field(_type => TwitterUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterUserUpdateManyMutationInput;
}
