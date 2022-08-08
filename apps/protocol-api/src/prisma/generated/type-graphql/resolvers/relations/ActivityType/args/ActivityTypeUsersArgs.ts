import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserActivityOrderByWithRelationInput } from '../../../inputs/UserActivityOrderByWithRelationInput';
import { UserActivityWhereInput } from '../../../inputs/UserActivityWhereInput';
import { UserActivityWhereUniqueInput } from '../../../inputs/UserActivityWhereUniqueInput';
import { UserActivityScalarFieldEnum } from '../../../../enums/UserActivityScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class ActivityTypeUsersArgs {
  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true,
  })
  where?: UserActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserActivityOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: UserActivityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: true,
  })
  cursor?: UserActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<'id' | 'createdAt' | 'updatedAt' | 'user_id' | 'activity_type_id'>
    | undefined;
}
