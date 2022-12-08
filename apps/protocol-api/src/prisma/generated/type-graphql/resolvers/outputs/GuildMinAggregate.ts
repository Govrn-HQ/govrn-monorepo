import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildStatus } from "../../enums/GuildStatus";

@TypeGraphQL.ObjectType("GuildMinAggregate", {
  isAbstract: true
})
export class GuildMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discord_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  congrats_channel!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contribution_reporting_channel!: string | null;

  @TypeGraphQL.Field(_type => GuildStatus, {
    nullable: true
  })
  status!: "INPUTTED" | "VALIDATED" | "ONBOARDED" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  verification_status_id!: number | null;
}
