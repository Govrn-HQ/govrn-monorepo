import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationCreateManyInput } from "../../../inputs/GuildTwitterIntegrationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationCreateManyInput], {
    nullable: false
  })
  data!: GuildTwitterIntegrationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
