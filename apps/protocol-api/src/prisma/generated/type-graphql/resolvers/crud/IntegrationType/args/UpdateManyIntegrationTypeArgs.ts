import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeUpdateManyMutationInput } from "../../../inputs/IntegrationTypeUpdateManyMutationInput";
import { IntegrationTypeWhereInput } from "../../../inputs/IntegrationTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IntegrationTypeWhereInput, {
    nullable: true
  })
  where?: IntegrationTypeWhereInput | undefined;
}
