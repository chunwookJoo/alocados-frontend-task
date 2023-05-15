export type CoinRatio = {
  [key: string]: {
    [key: string]: number;
  };
};

export type CoinBalanceState = {
  [key: string]: number;
};

export type ExchangedState = {
  exchangedDate: string;
  fromCount: number;
  fromSelect?: string;
  toCount: number;
  toSelect?: string;
};

export type UnitType = {
  [key: string]: string;
};
