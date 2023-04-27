import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeCreateManyInput } from "../../../inputs/CanonicalGuildActivityTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeCreateManyInput], {
    nullable: false
  })
  data!: CanonicalGuildActivityTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
