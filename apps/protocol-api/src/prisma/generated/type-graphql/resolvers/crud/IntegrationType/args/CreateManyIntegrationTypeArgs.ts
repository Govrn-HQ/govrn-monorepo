import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeCreateManyInput } from "../../../inputs/IntegrationTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => [IntegrationTypeCreateManyInput], {
    nullable: false
  })
  data!: IntegrationTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
