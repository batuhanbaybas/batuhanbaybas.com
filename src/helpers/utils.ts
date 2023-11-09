export const trancate = (text: string, len: number = 250) => {
  return text?.length > len ? text.substring(0, len - 1) + "..." : text;
};
