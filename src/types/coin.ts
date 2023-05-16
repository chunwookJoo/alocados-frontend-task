export type CoinRatio = {
  [key: string]: {
    [key: string]: number;
  };
};

export type CoinBalanceState = {
  [key: string]: number;
};

export type ExchangedState = {
  id: string;
  exchangedDate: string;
  fromCount: string;
  fromSelect?: string;
  toCount: number;
  toSelect?: string;
};

export type UnitType = {
  [key: string]: string;
};
