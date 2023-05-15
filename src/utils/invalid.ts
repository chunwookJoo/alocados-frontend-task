import { CoinBalanceState } from "../types/coin";

export const checkedBalance = (
  fromCount: number,
  fromSelect: string,
  coinState: CoinBalanceState
) => {
  if (coinState[fromSelect] >= fromCount) return true;
  return false;
};

export const checkedSelect = (
  fromCount: number,
  fromSelect: string,
  toSelect: string
) => {
  if (fromSelect === toSelect) return false;
  if (fromCount !== 0 && fromSelect !== "" && toSelect !== "") return true;
  return false;
};
