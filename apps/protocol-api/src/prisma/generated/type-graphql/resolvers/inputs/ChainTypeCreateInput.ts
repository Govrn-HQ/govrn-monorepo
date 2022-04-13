import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutChain_typeInput } from "../inputs/UserCreateNestedManyWithoutChain_typeInput";

@TypeGraphQL.InputType("ChainTypeCreateInput", {
  isAbstract: true
})
export class ChainTypeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutChain_typeInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutChain_typeInput | undefined;
}
