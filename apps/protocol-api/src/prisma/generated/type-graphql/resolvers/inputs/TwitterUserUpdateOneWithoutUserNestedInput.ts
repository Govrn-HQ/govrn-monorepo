import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserCreateOrConnectWithoutUserInput } from "../inputs/TwitterUserCreateOrConnectWithoutUserInput";
import { TwitterUserCreateWithoutUserInput } from "../inputs/TwitterUserCreateWithoutUserInput";
import { TwitterUserUpdateWithoutUserInput } from "../inputs/TwitterUserUpdateWithoutUserInput";
import { TwitterUserUpsertWithoutUserInput } from "../inputs/TwitterUserUpsertWithoutUserInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType("TwitterUserUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class TwitterUserUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutUserInput, {
    nullable: true
  })
  create?: TwitterUserCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: TwitterUserUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitterUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateWithoutUserInput, {
    nullable: true
  })
  update?: TwitterUserUpdateWithoutUserInput | undefined;
}
