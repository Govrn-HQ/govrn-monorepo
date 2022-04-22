import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateManyActivity_typeInput } from "../inputs/UserActivityCreateManyActivity_typeInput";

@TypeGraphQL.InputType("UserActivityCreateManyActivity_typeInputEnvelope", {
  isAbstract: true
})
export class UserActivityCreateManyActivity_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [UserActivityCreateManyActivity_typeInput], {
    nullable: false
  })
  data!: UserActivityCreateManyActivity_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
