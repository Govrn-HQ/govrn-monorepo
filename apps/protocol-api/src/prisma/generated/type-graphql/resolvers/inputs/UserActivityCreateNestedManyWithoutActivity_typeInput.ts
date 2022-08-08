import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateManyActivity_typeInputEnvelope } from "../inputs/UserActivityCreateManyActivity_typeInputEnvelope";
import { UserActivityCreateOrConnectWithoutActivity_typeInput } from "../inputs/UserActivityCreateOrConnectWithoutActivity_typeInput";
import { UserActivityCreateWithoutActivity_typeInput } from "../inputs/UserActivityCreateWithoutActivity_typeInput";
import { UserActivityWhereUniqueInput } from "../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.InputType("UserActivityCreateNestedManyWithoutActivity_typeInput", {
  isAbstract: true
})
export class UserActivityCreateNestedManyWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => [UserActivityCreateWithoutActivity_typeInput], {
    nullable: true
  })
  create?: UserActivityCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityCreateOrConnectWithoutActivity_typeInput], {
    nullable: true
  })
  connectOrCreate?: UserActivityCreateOrConnectWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserActivityCreateManyActivity_typeInputEnvelope, {
    nullable: true
  })
  createMany?: UserActivityCreateManyActivity_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereUniqueInput], {
    nullable: true
  })
  connect?: UserActivityWhereUniqueInput[] | undefined;
}
