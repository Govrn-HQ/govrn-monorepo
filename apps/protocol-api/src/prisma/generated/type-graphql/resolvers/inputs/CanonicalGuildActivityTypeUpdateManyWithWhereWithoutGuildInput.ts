import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeScalarWhereInput } from "../inputs/CanonicalGuildActivityTypeScalarWhereInput";
import { CanonicalGuildActivityTypeUpdateManyMutationInput } from "../inputs/CanonicalGuildActivityTypeUpdateManyMutationInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpdateManyWithWhereWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpdateManyWithWhereWithoutGuildInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeScalarWhereInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeUpdateManyMutationInput;
}
