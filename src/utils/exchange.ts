import { COIN_RATIO } from "./constants/coinItem";

export const exchangeHandler = (
  fromSelect: string,
  toSelect: string,
  fromCount: string | null
) => {
  if (fromSelect === "" || toSelect === "") return;
  const exchangeRate = COIN_RATIO[fromSelect][toSelect];
  return exchangeRate * Number(fromCount);
};
