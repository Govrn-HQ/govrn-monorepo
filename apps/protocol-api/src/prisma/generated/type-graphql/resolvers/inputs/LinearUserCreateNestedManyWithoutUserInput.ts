import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateManyUserInputEnvelope } from "../inputs/LinearUserCreateManyUserInputEnvelope";
import { LinearUserCreateOrConnectWithoutUserInput } from "../inputs/LinearUserCreateOrConnectWithoutUserInput";
import { LinearUserCreateWithoutUserInput } from "../inputs/LinearUserCreateWithoutUserInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class LinearUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LinearUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: LinearUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: LinearUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearUserWhereUniqueInput], {
    nullable: true
  })
  connect?: LinearUserWhereUniqueInput[] | undefined;
}
