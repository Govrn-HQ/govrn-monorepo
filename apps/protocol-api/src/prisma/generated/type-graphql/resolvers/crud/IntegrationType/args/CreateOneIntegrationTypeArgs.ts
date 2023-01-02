import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeCreateInput } from "../../../inputs/IntegrationTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeCreateInput, {
    nullable: false
  })
  data!: IntegrationTypeCreateInput;
}
