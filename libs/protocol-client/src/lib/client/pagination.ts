import { InputMaybe, IntFilter } from '../protocol-types';

interface WhereArgument {
  where?: {
    id?: InputMaybe<IntFilter>;
  };
}

interface Resource {
  id: number;
}

export async function* cursorPagination<
  T extends Resource,
  E extends WhereArgument
>(method: (arg0: E) => Promise<T[]>, args: E) {
  console.log('pageResults');
  const pageResults = [] as T[];
  do {
    const pageResults = await method(args);
    console.log(pageResults);
    console.log('pageResults');
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
