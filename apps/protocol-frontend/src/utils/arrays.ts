import { UIContribution } from '@govrn/ui-types';

export const mergePages = (pages: UIContribution[][]) => {
  let contributions = [] as UIContribution[];
  for (const page of pages) {
    contributions = [...contributions, ...page];
  }
  return contributions;
};

export const splitEntriesByComma = (entries: string) => {
  return entries.split(/[,]/).map(str => str.trim());
};
