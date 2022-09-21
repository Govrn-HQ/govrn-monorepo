/**
 * This type is used to remotely control a pagination from a component.
 */
export type Pagination = {
  next: () => void;
  hasMore: boolean;
};
