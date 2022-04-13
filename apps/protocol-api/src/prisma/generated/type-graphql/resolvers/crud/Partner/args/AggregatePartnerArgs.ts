import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnerOrderByWithRelationInput } from "../../../inputs/PartnerOrderByWithRelationInput";
import { PartnerWhereInput } from "../../../inputs/PartnerWhereInput";
import { PartnerWhereUniqueInput } from "../../../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePartnerArgs {
  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true
  })
  where?: PartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PartnerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PartnerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: true
  })
  cursor?: PartnerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
