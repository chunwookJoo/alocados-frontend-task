import useLocalStorage from "../hooks/useLocalStorage";
import { ExchangedState } from "../types/coin";
import Exchanged from "./element/Exchanged";

const ExchangeHistory = () => {
  const [getValue, _] = useLocalStorage("exchange-history", []);

  return (
    <>
      {getValue.map((exchangedList: ExchangedState) => (
        <Exchanged exchangedList={exchangedList} />
      ))}
    </>
  );
};

export default ExchangeHistory;
