import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyMembershipStatusInputEnvelope } from "../inputs/GuildUserCreateManyMembershipStatusInputEnvelope";
import { GuildUserCreateOrConnectWithoutMembershipStatusInput } from "../inputs/GuildUserCreateOrConnectWithoutMembershipStatusInput";
import { GuildUserCreateWithoutMembershipStatusInput } from "../inputs/GuildUserCreateWithoutMembershipStatusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserCreateNestedManyWithoutMembershipStatusInput", {
  isAbstract: true
})
export class GuildUserCreateNestedManyWithoutMembershipStatusInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutMembershipStatusInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutMembershipStatusInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyMembershipStatusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyMembershipStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildUserWhereUniqueInput[] | undefined;
}
