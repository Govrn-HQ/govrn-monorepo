import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeUpdateWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeUpdateWithoutGuildInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeUpdateWithoutGuildInput;
}
