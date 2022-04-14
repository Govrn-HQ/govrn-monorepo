import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateOrConnectWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateOrConnectWithoutAssingned_issuesInput";
import { LinearUserCreateWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateWithoutAssingned_issuesInput";
import { LinearUserUpdateWithoutAssingned_issuesInput } from "../inputs/LinearUserUpdateWithoutAssingned_issuesInput";
import { LinearUserUpsertWithoutAssingned_issuesInput } from "../inputs/LinearUserUpsertWithoutAssingned_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserUpdateOneWithoutAssingned_issuesInput", {
  isAbstract: true
})
export class LinearUserUpdateOneWithoutAssingned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssingned_issuesInput, {
    nullable: true
  })
  create?: LinearUserCreateWithoutAssingned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateOrConnectWithoutAssingned_issuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutAssingned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserUpsertWithoutAssingned_issuesInput, {
    nullable: true
  })
  upsert?: LinearUserUpsertWithoutAssingned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutAssingned_issuesInput, {
    nullable: true
  })
  update?: LinearUserUpdateWithoutAssingned_issuesInput | undefined;
}
