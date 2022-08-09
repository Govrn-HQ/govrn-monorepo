import { InputMaybe, IntFilter, Sdk } from '../protocol-types';
import { GraphQLClient } from 'graphql-request';

interface WhereArgument {
  where?: {
    id?: InputMaybe<IntFilter>;
  };
}

interface Resource {
  id: number;
}

interface PaginationContext {
  sdk: Sdk;
  client: GraphQLClient;
}

export async function* cursorPagination<
  T extends Resource,
  E extends WhereArgument,
  P extends PaginationContext,
>(method: (arg0: E) => Promise<T[]>, args: E, context: P) {
  const pageResults = [] as T[];
  do {
    const methodBinded = method.bind(context);
    const pageResults = await methodBinded(args);
    if (pageResults.length === 0) {
      return pageResults;
    }
    yield pageResults;
    const lastElement = pageResults[pageResults.length - 1];
    if (args?.where) {
      if (args.where?.id) {
        throw Error('Cursor will overwrite id');
      }
      args.where.id = { gt: lastElement.id };
    } else {
      args.where = { id: { gt: lastElement.id } };
    }
  } while (pageResults.length > 0);
  return [];
}
