export const getFulfilled = <T>(results: PromiseSettledResult<T>[]): T[] => {
  const result = [] as T[];
  for (const promise of results) {
    if (promise.status === 'fulfilled' && promise.value !== null) {
      result.push(promise.value);
    }
  }

  return result;
};
