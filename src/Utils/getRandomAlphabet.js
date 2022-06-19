const ALPHABETLIST = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";

export const getRandomAlphabet = () => {
  const randomIndex = Math.floor(Math.random() * ALPHABETLIST.length);
  return ALPHABETLIST[randomIndex];
};
