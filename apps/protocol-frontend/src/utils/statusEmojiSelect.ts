const emojis = {
  minted: '🌞',
  staging: '🕒',
  pending: '👀',
};

export const statusEmojiSelect = (status: string) => {
  return emojis[status] ?? '👀';
};
