import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractOrderByWithRelationInput } from "../../../inputs/SplitContractOrderByWithRelationInput";
import { SplitContractWhereInput } from "../../../inputs/SplitContractWhereInput";
import { SplitContractWhereUniqueInput } from "../../../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  where?: SplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SplitContractOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SplitContractOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: true
  })
  cursor?: SplitContractWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
