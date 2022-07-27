import * as Dom from 'graphql-request/dist/types.dom';
import { SortOrder, InputMaybe, Scalars, IntFilter } from './protocol-types';

interface WhereArgs {
  AND?: InputMaybe<Array<WhereArgs>>;
  id?: InputMaybe<IntFilter>;
}

interface OrderBy {
  id?: InputMaybe<SortOrder>;
}

interface GraphQLArgs {
  where?: WhereArgs;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<OrderBy> | OrderBy>;
}

interface ReturnType {
  result: Array<{
    id: number;
  }>;
}

interface PaginatedResponse<T> extends AsyncIterable<T> {
  then(
    resolve: ((value: T) => T | PromiseLike<T>) | null | undefined,
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    reject: ((reason: any) => T | PromiseLike<T>) | null | undefined
  ): Promise<T>;
}

export function paginate<T extends GraphQLArgs, V extends ReturnType>(
  func: (
    variables?: T,
    requestHeaders?: Dom.RequestInit['headers']
  ) => Promise<V>,
  variables?: T,
  requestHeaders?: Dom.RequestInit['headers']
): PaginatedResponse<V> {
  return {
    then(resolve, reject) {
      return func(variables, requestHeaders).then(resolve, reject);
    },
    async *[Symbol.asyncIterator](): AsyncIterator<V> {
      let ended = false;
      let pagination_token: string | undefined;
      while (!ended) {
        const response = await func(variables, requestHeaders);
        yield response;
        variables = { ...variables, where: {} };
        // Add in order and where logic
        pagination_token = response?.meta?.next_token;
        if (!pagination_token) {
          ended = true;
        }
      }
    },
  };
}
