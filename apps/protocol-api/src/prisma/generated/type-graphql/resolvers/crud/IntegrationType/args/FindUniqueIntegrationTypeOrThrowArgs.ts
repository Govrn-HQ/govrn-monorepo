import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeWhereUniqueInput } from "../../../inputs/IntegrationTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIntegrationTypeOrThrowArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationTypeWhereUniqueInput;
}
