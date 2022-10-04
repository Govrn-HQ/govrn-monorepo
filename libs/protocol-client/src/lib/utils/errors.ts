export class ChainIdError extends Error {
  constructor(message?: string) {
    super(message || 'Failed to fetch on chain Id');
  }
}
