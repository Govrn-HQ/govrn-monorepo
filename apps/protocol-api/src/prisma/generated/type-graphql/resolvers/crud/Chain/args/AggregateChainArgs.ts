import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainOrderByWithRelationInput } from "../../../inputs/ChainOrderByWithRelationInput";
import { ChainWhereInput } from "../../../inputs/ChainWhereInput";
import { ChainWhereUniqueInput } from "../../../inputs/ChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChainArgs {
  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  where?: ChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChainOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChainOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
