import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutContributionsInput } from "../inputs/ActivityTypeCreateNestedOneWithoutContributionsInput";
import { AttestationCreateNestedManyWithoutContributionInput } from "../inputs/AttestationCreateNestedManyWithoutContributionInput";
import { ContributionStatusCreateNestedOneWithoutContributionsInput } from "../inputs/ContributionStatusCreateNestedOneWithoutContributionsInput";
import { GuildContributionCreateNestedManyWithoutContributionInput } from "../inputs/GuildContributionCreateNestedManyWithoutContributionInput";
import { LinearIssueCreateNestedOneWithoutContributionInput } from "../inputs/LinearIssueCreateNestedOneWithoutContributionInput";
import { PartnerCreateNestedManyWithoutContributionInput } from "../inputs/PartnerCreateNestedManyWithoutContributionInput";
import { UserCreateNestedOneWithoutContributionsInput } from "../inputs/UserCreateNestedOneWithoutContributionsInput";

@TypeGraphQL.InputType("ContributionCreateInput", {
  isAbstract: true
})
export class ContributionCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusCreateNestedOneWithoutContributionsInput, {
    nullable: false
  })
  status!: ContributionStatusCreateNestedOneWithoutContributionsInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutContributionsInput, {
    nullable: false
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutContributionsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutContributionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutContributionsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_of_submission?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_engagement!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proof?: string | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateNestedManyWithoutContributionInput, {
    nullable: true
  })
  attestations?: AttestationCreateNestedManyWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => PartnerCreateNestedManyWithoutContributionInput, {
    nullable: true
  })
  partners?: PartnerCreateNestedManyWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateNestedManyWithoutContributionInput, {
    nullable: true
  })
  guilds?: GuildContributionCreateNestedManyWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateNestedOneWithoutContributionInput, {
    nullable: true
  })
  linear_issue?: LinearIssueCreateNestedOneWithoutContributionInput | undefined;
}
