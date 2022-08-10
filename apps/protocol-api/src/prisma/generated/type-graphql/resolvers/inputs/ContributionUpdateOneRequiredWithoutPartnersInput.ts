import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutPartnersInput } from "../inputs/ContributionCreateOrConnectWithoutPartnersInput";
import { ContributionCreateWithoutPartnersInput } from "../inputs/ContributionCreateWithoutPartnersInput";
import { ContributionUpdateWithoutPartnersInput } from "../inputs/ContributionUpdateWithoutPartnersInput";
import { ContributionUpsertWithoutPartnersInput } from "../inputs/ContributionUpsertWithoutPartnersInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateOneRequiredWithoutPartnersInput", {
  isAbstract: true
})
export class ContributionUpdateOneRequiredWithoutPartnersInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutPartnersInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutPartnersInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutPartnersInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutPartnersInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutPartnersInput, {
    nullable: true
  })
  upsert?: ContributionUpsertWithoutPartnersInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutPartnersInput, {
    nullable: true
  })
  update?: ContributionUpdateWithoutPartnersInput | undefined;
}
