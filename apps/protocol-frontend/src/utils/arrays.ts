import { UIContribution, UIGuildImportHistory } from '@govrn/ui-types';

export const mergePages = (pages: UIContribution[][]) => {
  let contributions = [] as UIContribution[];
  for (const page of pages) {
    contributions = [...contributions, ...page];
  }
  return contributions;
};

// TODO: look to generalize this and mergePages
export const mergeHistoryPages = (pages: UIGuildImportHistory[][]) => {
  let importHistories = [] as UIGuildImportHistory[];
  for (const page of pages) {
    importHistories = [...importHistories, ...page];
  }
  return importHistories;
};

export const splitEntriesByComma = (entries: string) => {
  return entries.split(/[,]/).map(str => str.trim());
};
