import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnerUpdateInput } from "../../../inputs/PartnerUpdateInput";
import { PartnerWhereUniqueInput } from "../../../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePartnerArgs {
  @TypeGraphQL.Field(_type => PartnerUpdateInput, {
    nullable: false
  })
  data!: PartnerUpdateInput;

  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false
  })
  where!: PartnerWhereUniqueInput;
}
