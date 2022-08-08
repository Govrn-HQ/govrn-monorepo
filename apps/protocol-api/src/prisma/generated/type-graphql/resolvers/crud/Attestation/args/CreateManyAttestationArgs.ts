import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationCreateManyInput } from '../../../inputs/AttestationCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyAttestationArgs {
  @TypeGraphQL.Field(_type => [AttestationCreateManyInput], {
    nullable: false,
  })
  data!: AttestationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
