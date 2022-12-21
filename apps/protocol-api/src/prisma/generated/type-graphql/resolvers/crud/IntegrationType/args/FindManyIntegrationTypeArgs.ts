import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeOrderByWithRelationInput } from "../../../inputs/IntegrationTypeOrderByWithRelationInput";
import { IntegrationTypeWhereInput } from "../../../inputs/IntegrationTypeWhereInput";
import { IntegrationTypeWhereUniqueInput } from "../../../inputs/IntegrationTypeWhereUniqueInput";
import { IntegrationTypeScalarFieldEnum } from "../../../../enums/IntegrationTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereInput, {
    nullable: true
  })
  where?: IntegrationTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IntegrationTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IntegrationTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name"> | undefined;
}
