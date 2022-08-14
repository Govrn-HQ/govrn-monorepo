import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeCreateManyCategory_activityInput } from "../inputs/CategoryActivityTypeCreateManyCategory_activityInput";

@TypeGraphQL.InputType("CategoryActivityTypeCreateManyCategory_activityInputEnvelope", {
  isAbstract: true
})
export class CategoryActivityTypeCreateManyCategory_activityInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryActivityTypeCreateManyCategory_activityInput], {
    nullable: false
  })
  data!: CategoryActivityTypeCreateManyCategory_activityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
