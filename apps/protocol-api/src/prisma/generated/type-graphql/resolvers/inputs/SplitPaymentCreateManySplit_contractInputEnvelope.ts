import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateManySplit_contractInput } from "../inputs/SplitPaymentCreateManySplit_contractInput";

@TypeGraphQL.InputType("SplitPaymentCreateManySplit_contractInputEnvelope", {
  isAbstract: true
})
export class SplitPaymentCreateManySplit_contractInputEnvelope {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateManySplit_contractInput], {
    nullable: false
  })
  data!: SplitPaymentCreateManySplit_contractInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
