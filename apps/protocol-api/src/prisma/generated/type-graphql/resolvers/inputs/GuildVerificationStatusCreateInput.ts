import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedManyWithoutVerificationStatusInput } from "../inputs/GuildCreateNestedManyWithoutVerificationStatusInput";

@TypeGraphQL.InputType("GuildVerificationStatusCreateInput", {
  isAbstract: true
})
export class GuildVerificationStatusCreateInput {
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

  @TypeGraphQL.Field(_type => GuildCreateNestedManyWithoutVerificationStatusInput, {
    nullable: true
  })
  Guild?: GuildCreateNestedManyWithoutVerificationStatusInput | undefined;
}
