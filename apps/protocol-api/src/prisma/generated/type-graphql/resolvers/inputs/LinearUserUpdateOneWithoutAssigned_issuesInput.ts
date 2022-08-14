import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateOrConnectWithoutAssigned_issuesInput } from "../inputs/LinearUserCreateOrConnectWithoutAssigned_issuesInput";
import { LinearUserCreateWithoutAssigned_issuesInput } from "../inputs/LinearUserCreateWithoutAssigned_issuesInput";
import { LinearUserUpdateWithoutAssigned_issuesInput } from "../inputs/LinearUserUpdateWithoutAssigned_issuesInput";
import { LinearUserUpsertWithoutAssigned_issuesInput } from "../inputs/LinearUserUpsertWithoutAssigned_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserUpdateOneWithoutAssigned_issuesInput", {
  isAbstract: true
})
export class LinearUserUpdateOneWithoutAssigned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssigned_issuesInput, {
    nullable: true
  })
  create?: LinearUserCreateWithoutAssigned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateOrConnectWithoutAssigned_issuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutAssigned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserUpsertWithoutAssigned_issuesInput, {
    nullable: true
  })
  upsert?: LinearUserUpsertWithoutAssigned_issuesInput | undefined;

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

  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutAssigned_issuesInput, {
    nullable: true
  })
  update?: LinearUserUpdateWithoutAssigned_issuesInput | undefined;
}
