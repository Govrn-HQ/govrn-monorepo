import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateManySender_userInput } from "../inputs/SplitPaymentCreateManySender_userInput";

@TypeGraphQL.InputType("SplitPaymentCreateManySender_userInputEnvelope", {
  isAbstract: true
})
export class SplitPaymentCreateManySender_userInputEnvelope {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateManySender_userInput], {
    nullable: false
  })
  data!: SplitPaymentCreateManySender_userInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
