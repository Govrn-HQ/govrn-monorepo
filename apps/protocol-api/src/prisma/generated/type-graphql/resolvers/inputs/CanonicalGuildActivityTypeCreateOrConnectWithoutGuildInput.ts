import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuildInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateWithoutGuildInput, {
    nullable: false
  })
  create!: CanonicalGuildActivityTypeCreateWithoutGuildInput;
}
