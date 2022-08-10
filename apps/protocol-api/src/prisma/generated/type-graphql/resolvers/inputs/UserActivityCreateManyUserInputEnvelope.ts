import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateManyUserInput } from "../inputs/UserActivityCreateManyUserInput";

@TypeGraphQL.InputType("UserActivityCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserActivityCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserActivityCreateManyUserInput], {
    nullable: false
  })
  data!: UserActivityCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
