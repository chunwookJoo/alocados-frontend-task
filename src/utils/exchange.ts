import { COIN_RATIO } from "./constants/coinItem";

export const exchangeHandler = (
  fromCoin: string,
  toCoin: string,
  fromCount: number | null
) => {
  if (fromCoin === "" || toCoin === "") return;
  const exchangeRate = COIN_RATIO[fromCoin][toCoin];
  return exchangeRate * Number(fromCount);
};
