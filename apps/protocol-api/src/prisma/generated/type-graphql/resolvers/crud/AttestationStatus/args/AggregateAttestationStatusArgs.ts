import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttestationStatusOrderByWithRelationInput } from "../../../inputs/AttestationStatusOrderByWithRelationInput";
import { AttestationStatusWhereInput } from "../../../inputs/AttestationStatusWhereInput";
import { AttestationStatusWhereUniqueInput } from "../../../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAttestationStatusArgs {
  @TypeGraphQL.Field(_type => AttestationStatusWhereInput, {
    nullable: true
  })
  where?: AttestationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttestationStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AttestationStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: AttestationStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
