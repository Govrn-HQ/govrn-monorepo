import { PromisePool } from '@supercharge/promise-pool';
import { ProcessHandler } from '@supercharge/promise-pool/dist/contracts';

const DEFAULT_CHUNK_SIZE = 50;

/**
 * Executes tasks into smaller chunks instead of executing all at once.
 */
export const batch = async <T, R>(
  items: T[],
  process: ProcessHandler<T, R>,
  chunk = DEFAULT_CHUNK_SIZE,
) => {
  return await new PromisePool()
    .withConcurrency(chunk)
    .for(items)
    .process(process);
};
