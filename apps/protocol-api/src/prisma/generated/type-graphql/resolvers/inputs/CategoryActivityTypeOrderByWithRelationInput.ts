import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeOrderByWithRelationInput } from "../inputs/ActivityTypeOrderByWithRelationInput";
import { CategoryActivityOrderByWithRelationInput } from "../inputs/CategoryActivityOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoryActivityTypeOrderByWithRelationInput", {
  isAbstract: true
})
export class CategoryActivityTypeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_activity_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityOrderByWithRelationInput, {
    nullable: true
  })
  category_activity?: CategoryActivityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activity_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeOrderByWithRelationInput, {
    nullable: true
  })
  activity_type?: ActivityTypeOrderByWithRelationInput | undefined;
}
