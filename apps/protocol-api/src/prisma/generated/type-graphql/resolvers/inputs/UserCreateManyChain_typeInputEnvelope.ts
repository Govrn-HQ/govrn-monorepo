import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyChain_typeInput } from "../inputs/UserCreateManyChain_typeInput";

@TypeGraphQL.InputType("UserCreateManyChain_typeInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyChain_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyChain_typeInput], {
    nullable: false
  })
  data!: UserCreateManyChain_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
