import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnerCreateInput } from "../../../inputs/PartnerCreateInput";
import { PartnerUpdateInput } from "../../../inputs/PartnerUpdateInput";
import { PartnerWhereUniqueInput } from "../../../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePartnerArgs {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnerCreateInput, {
    nullable: false
  })
  create!: PartnerCreateInput;

  @TypeGraphQL.Field(_type => PartnerUpdateInput, {
    nullable: false
  })
  update!: PartnerUpdateInput;
}
