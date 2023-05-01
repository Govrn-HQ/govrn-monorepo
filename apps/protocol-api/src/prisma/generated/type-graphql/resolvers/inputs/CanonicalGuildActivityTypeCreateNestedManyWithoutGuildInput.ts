import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateManyGuildInputEnvelope } from "../inputs/CanonicalGuildActivityTypeCreateManyGuildInputEnvelope";
import { CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput";
import { CanonicalGuildActivityTypeCreateWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuildInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeCreateWithoutGuildInput], {
    nullable: true
  })
  create?: CanonicalGuildActivityTypeCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: CanonicalGuildActivityTypeCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: CanonicalGuildActivityTypeWhereUniqueInput[] | undefined;
}
