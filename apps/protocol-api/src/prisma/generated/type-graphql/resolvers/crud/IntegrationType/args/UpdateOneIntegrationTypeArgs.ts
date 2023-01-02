import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeUpdateInput } from "../../../inputs/IntegrationTypeUpdateInput";
import { IntegrationTypeWhereUniqueInput } from "../../../inputs/IntegrationTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeUpdateInput, {
    nullable: false
  })
  data!: IntegrationTypeUpdateInput;

  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationTypeWhereUniqueInput;
}
