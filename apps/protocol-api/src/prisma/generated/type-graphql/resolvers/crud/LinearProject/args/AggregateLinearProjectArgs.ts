import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearProjectOrderByWithRelationInput } from "../../../inputs/LinearProjectOrderByWithRelationInput";
import { LinearProjectWhereInput } from "../../../inputs/LinearProjectWhereInput";
import { LinearProjectWhereUniqueInput } from "../../../inputs/LinearProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectWhereInput, {
    nullable: true
  })
  where?: LinearProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LinearProjectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: true
  })
  cursor?: LinearProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
