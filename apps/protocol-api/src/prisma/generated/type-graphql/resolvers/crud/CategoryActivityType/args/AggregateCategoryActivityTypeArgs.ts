import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityTypeOrderByWithRelationInput } from "../../../inputs/CategoryActivityTypeOrderByWithRelationInput";
import { CategoryActivityTypeWhereInput } from "../../../inputs/CategoryActivityTypeWhereInput";
import { CategoryActivityTypeWhereUniqueInput } from "../../../inputs/CategoryActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true
  })
  where?: CategoryActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CategoryActivityTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoryActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
