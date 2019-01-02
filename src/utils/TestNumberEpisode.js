export const testNumberEpisode = (number) => {
  if (number > 0 && number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};
