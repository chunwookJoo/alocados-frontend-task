import useLocalStorage from "../hooks/useLocalStorage";
import { ExchangedState } from "../types/coin";
import ExchangeSorting from "./ExchangeSorting";
import Exchanged from "./element/Exchanged";
import { useState } from "react";

const ExchangeHistory = () => {
  const [getValue] = useLocalStorage("exchange-history", []);
  const [isSorting, setIsSorting] = useState(true);
  const [historySort, setHistorySort] = useState(getValue);

  const onClickSort = () => {
    if (isSorting) {
      setHistorySort(historySort.reverse());
      setIsSorting(!isSorting);
    } else {
      setHistorySort(historySort.reverse());
      setIsSorting(!isSorting);
    }
  };

  return (
    <>
      <ExchangeSorting onClick={onClickSort} isSorting={isSorting} />
      {historySort.map((exchangedList: ExchangedState) => (
        <Exchanged key={exchangedList.id} exchangedList={exchangedList} />
      ))}
    </>
  );
};

export default ExchangeHistory;
