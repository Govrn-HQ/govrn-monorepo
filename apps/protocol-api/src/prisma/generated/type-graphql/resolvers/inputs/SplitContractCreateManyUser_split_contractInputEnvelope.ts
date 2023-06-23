import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateManyUser_split_contractInput } from "../inputs/SplitContractCreateManyUser_split_contractInput";

@TypeGraphQL.InputType("SplitContractCreateManyUser_split_contractInputEnvelope", {
  isAbstract: true
})
export class SplitContractCreateManyUser_split_contractInputEnvelope {
  @TypeGraphQL.Field(_type => [SplitContractCreateManyUser_split_contractInput], {
    nullable: false
  })
  data!: SplitContractCreateManyUser_split_contractInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
