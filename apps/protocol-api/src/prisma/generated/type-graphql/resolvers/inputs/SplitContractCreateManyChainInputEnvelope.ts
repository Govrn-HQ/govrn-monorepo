import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateManyChainInput } from "../inputs/SplitContractCreateManyChainInput";

@TypeGraphQL.InputType("SplitContractCreateManyChainInputEnvelope", {
  isAbstract: true
})
export class SplitContractCreateManyChainInputEnvelope {
  @TypeGraphQL.Field(_type => [SplitContractCreateManyChainInput], {
    nullable: false
  })
  data!: SplitContractCreateManyChainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
