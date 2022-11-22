import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutTwitter_usersInput } from "../inputs/UserCreateNestedOneWithoutTwitter_usersInput";

@TypeGraphQL.InputType("TwitterUserCreateWithoutTweetsInput", {
  isAbstract: true
})
export class TwitterUserCreateWithoutTweetsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  twitter_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTwitter_usersInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutTwitter_usersInput | undefined;
}
