import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserWhereInput } from "../inputs/LinearUserWhereInput";

@TypeGraphQL.InputType("LinearUserListRelationFilter", {
  isAbstract: true
})
export class LinearUserListRelationFilter {
  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  every?: LinearUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  some?: LinearUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  none?: LinearUserWhereInput | undefined;
}
