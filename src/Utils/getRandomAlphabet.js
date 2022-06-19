const ALPHABETLIST = "abcdefghijklmnopqrstuvwxyz";

export const getRandomAlphabet = () => {
  const randomIndex = Math.floor(Math.random() * ALPHABETLIST.length);
  return ALPHABETLIST[randomIndex];
};
