const DEFAULT_CHUNK_SIZE = 50;

async function* doPatching<T>(tasks: PromiseLike<T>[], chunk: number) {
  for (let i = 0; i < tasks.length; i += chunk) {
    yield await Promise.allSettled(tasks.slice(i, i + chunk));
  }
}

/**
 * Executes tasks into smaller chunks instead of executing all at once.
 *
 * @param tasks promises to be executed.
 * @param chunk the size of single patch.
 */
const patch = async <T>(
  tasks: PromiseLike<T>[],
  chunk = DEFAULT_CHUNK_SIZE,
) => {
  if (chunk <= 0) throw new Error(`Select suitable chunk size: ${chunk}`);

  const result: PromiseSettledResult<Awaited<T>>[] = [];
  for await (const patch of doPatching(tasks, chunk)) {
    result.push(...patch);
  }
  return result;
};

export default patch;
