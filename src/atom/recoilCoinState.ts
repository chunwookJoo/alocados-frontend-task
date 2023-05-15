import { atom } from "recoil";
import { CoinBalanceState } from "../types/coin";

export const coinBalanceState = atom<CoinBalanceState>({
  key: "coinBalanceState",
  default: {
    Solana: 0,
    Ethereum: 2000,
    BnB: 0,
  },
});
