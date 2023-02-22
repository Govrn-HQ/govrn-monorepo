const emojis: { [key: string]: string } = {
  minted: '🌞',
  staging: '🕒',
  pending: '👀',
};

export const statusEmojiSelect = (status: string) => {
  return emojis[status] ?? '👀';
};
