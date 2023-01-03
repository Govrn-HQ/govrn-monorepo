import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeWhereInput } from "../../../inputs/IntegrationTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereInput, {
    nullable: true
  })
  where?: IntegrationTypeWhereInput | undefined;
}
