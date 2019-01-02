export const cleanTextFromTags = (str) => {
  let cleanText = str.replace(/<\/?[^>]+(>|$)/g, "");
  return cleanText;
};
