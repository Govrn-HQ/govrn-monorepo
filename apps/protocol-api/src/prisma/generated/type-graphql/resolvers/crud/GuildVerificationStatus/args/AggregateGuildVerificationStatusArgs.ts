import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusOrderByWithRelationInput } from "../../../inputs/GuildVerificationStatusOrderByWithRelationInput";
import { GuildVerificationStatusWhereInput } from "../../../inputs/GuildVerificationStatusWhereInput";
import { GuildVerificationStatusWhereUniqueInput } from "../../../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildVerificationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildVerificationStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildVerificationStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildVerificationStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
