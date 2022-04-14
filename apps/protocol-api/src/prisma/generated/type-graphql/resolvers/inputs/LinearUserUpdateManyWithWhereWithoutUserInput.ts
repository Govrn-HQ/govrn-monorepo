import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserScalarWhereInput } from "../inputs/LinearUserScalarWhereInput";
import { LinearUserUpdateManyMutationInput } from "../inputs/LinearUserUpdateManyMutationInput";

@TypeGraphQL.InputType("LinearUserUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class LinearUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => LinearUserScalarWhereInput, {
    nullable: false
  })
  where!: LinearUserScalarWhereInput;

  @TypeGraphQL.Field(_type => LinearUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: LinearUserUpdateManyMutationInput;
}
