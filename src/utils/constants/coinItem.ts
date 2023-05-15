import { CoinRatio } from "../../types/coin";

export const SELECT_COIN_ITEM = [
  {
    id: 0,
    value: "",
    name: "코인을 선택하세요.",
  },
  {
    id: 1,
    value: "Solana",
    name: "Solana",
    unit: "SOL",
  },
  {
    id: 2,
    value: "Ethereum",
    name: "Ethereum",
    unit: "ETH",
  },
  {
    id: 3,
    value: "BnB",
    name: "BnB",
    unit: "BNB",
  },
];

export const COIN_RATIO: CoinRatio = {
  Ethereum: {
    Ethereum: 1,
    Solana: 100,
    BnB: 50,
  },
  Solana: {
    Ethereum: 0.01,
    Solana: 1,
    BnB: 0.5,
  },
  BnB: {
    Ethereum: 0.02,
    Solana: 2,
    BnB: 1,
  },
};
