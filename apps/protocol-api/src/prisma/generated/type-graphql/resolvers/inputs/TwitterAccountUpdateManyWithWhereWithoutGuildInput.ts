import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountScalarWhereInput } from "../inputs/TwitterAccountScalarWhereInput";
import { TwitterAccountUpdateManyMutationInput } from "../inputs/TwitterAccountUpdateManyMutationInput";

@TypeGraphQL.InputType("TwitterAccountUpdateManyWithWhereWithoutGuildInput", {
  isAbstract: true
})
export class TwitterAccountUpdateManyWithWhereWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountScalarWhereInput, {
    nullable: false
  })
  where!: TwitterAccountScalarWhereInput;

  @TypeGraphQL.Field(_type => TwitterAccountUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterAccountUpdateManyMutationInput;
}
