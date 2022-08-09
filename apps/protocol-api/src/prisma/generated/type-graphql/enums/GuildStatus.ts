import * as TypeGraphQL from 'type-graphql';

export enum GuildStatus {
  INPUTTED = 'INPUTTED',
  VALIDATED = 'VALIDATED',
  ONBOARDED = 'ONBOARDED',
}
TypeGraphQL.registerEnumType(GuildStatus, {
  name: 'GuildStatus',
  description: undefined,
});
