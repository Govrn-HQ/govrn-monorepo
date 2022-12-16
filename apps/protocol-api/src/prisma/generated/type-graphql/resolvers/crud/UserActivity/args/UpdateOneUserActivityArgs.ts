import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserActivityUpdateInput } from "../../../inputs/UserActivityUpdateInput";
import { UserActivityWhereUniqueInput } from "../../../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityUpdateInput, {
    nullable: false
  })
  data!: UserActivityUpdateInput;

  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false
  })
  where!: UserActivityWhereUniqueInput;
}
