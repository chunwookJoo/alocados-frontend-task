import { CoinBalanceState } from "../types/coin";

export const checkedBalance = (
  fromCount: string,
  fromSelect: string,
  coinState: CoinBalanceState
) => {
  if (Number(coinState[fromSelect]) >= Number(fromCount)) return true;
  return false;
};

export const checkedSelect = (
  fromCount: string | number,
  fromSelect: string,
  toSelect: string
) => {
  if (fromSelect === toSelect) return false;
  if (fromCount !== 0 && fromSelect !== "" && toSelect !== "") return true;
  return false;
};
