import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserOrderByWithRelationInput } from "../../../inputs/TwitterUserOrderByWithRelationInput";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";
import { TwitterUserWhereUniqueInput } from "../../../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TwitterUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitterUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
