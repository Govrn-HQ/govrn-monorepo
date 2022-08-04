import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerCreateManyUserInputEnvelope } from '../inputs/PartnerCreateManyUserInputEnvelope';
import { PartnerCreateOrConnectWithoutUserInput } from '../inputs/PartnerCreateOrConnectWithoutUserInput';
import { PartnerCreateWithoutUserInput } from '../inputs/PartnerCreateWithoutUserInput';
import { PartnerWhereUniqueInput } from '../inputs/PartnerWhereUniqueInput';

@TypeGraphQL.InputType('PartnerCreateNestedManyWithoutUserInput', {
  isAbstract: true,
})
export class PartnerCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PartnerCreateWithoutUserInput], {
    nullable: true,
  })
  create?: PartnerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: PartnerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PartnerCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: PartnerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PartnerWhereUniqueInput[] | undefined;
}
