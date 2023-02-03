import {
  UIContribution,
  UIGuildImportHistory,
  UIGuildUsers,
} from '@govrn/ui-types';

export const mergePages = (pages: UIContribution[][]) => {
  let contributions = [] as UIContribution[];
  for (const page of pages) {
    contributions = [...contributions, ...page];
  }
  return contributions;
};

// TODO: look to generalize these with mergePages
export const mergeHistoryPages = (pages: UIGuildImportHistory[][]) => {
  let importHistories = [] as UIGuildImportHistory[];
  for (const page of pages) {
    importHistories = [...importHistories, ...page];
  }
  return importHistories;
};

export const mergeMemberPages = (pages: UIGuildUsers[][]) => {
  let guildUsers = [] as UIGuildUsers[];
  for (const page of pages) {
    guildUsers = [...guildUsers, ...page];
  }
  return guildUsers;
};

export const splitEntriesByComma = (entries: string) => {
  return entries.split(/[,]/).map(str => str.trim());
};
