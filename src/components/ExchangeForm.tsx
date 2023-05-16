import { useEffect, useState } from "react";
import ToInput from "./element/ToInput";
import FromInput from "./element/FromInput";
import Select from "./element/Select";
import Button from "./Button";
import { exchangeHandler } from "../utils/exchange";
import { useRecoilState } from "recoil";
import { coinBalanceState } from "../atom/recoilCoinState";
import { checkedBalance, checkedSelect } from "../utils/invalid";
import useLocalStorage from "../hooks/useLocalStorage";
import { ExchangedState } from "../types/coin";
import Exchanged from "./element/Exchanged";
import { FlexRow } from "../styles/Flex";
import { styled } from "styled-components";
import { getFormatDate, getFormatTime } from "../utils/format";
import { v4 as uuidv4 } from "uuid";

const ExchangeForm = () => {
  const [fromCount, setFromCount] = useState("");
  const [fromSelect, setFromSelect] = useState("");
  const [toCount, setToCount] = useState(0);
  const [toSelect, setToSelect] = useState("");

  const [disabled, setDisabled] = useState(true);

  const [coinState, setCoinState] = useRecoilState(coinBalanceState);
  const [getValue, setValue] = useLocalStorage("exchange-history", []);
  const recentExchanged = getValue[0];

  useEffect(() => {
    if (
      checkedSelect(fromCount, fromSelect, toSelect) &&
      checkedBalance(fromCount, fromSelect, coinState)
    ) {
      const exchangeRate = exchangeHandler(fromSelect, toSelect, fromCount);
      if (exchangeRate) {
        setToCount(exchangeRate);
        setDisabled(false);
        return;
      }
    } else {
      setDisabled(true);
      setToCount(0);
      return;
    }
  }, [fromSelect, toSelect, fromCount]);

  const onClickExchange = () => {
    setCoinState({
      ...coinState,
      [fromSelect]: coinState[fromSelect] - Number(fromCount),
      [toSelect]: coinState[toSelect] + toCount,
    });

    const nowDate = getFormatDate(new Date());
    const nowTime = getFormatTime(new Date());

    const exchangeObject: ExchangedState = {
      id: uuidv4(),
      exchangedDate: `${nowDate}, ${nowTime}`,
      fromCount,
      fromSelect,
      toCount,
      toSelect,
    };

    setValue([exchangeObject, ...getValue]);

    setFromCount("");
    setToCount(0);
    setFromSelect("");
    setToSelect("");
  };

  return (
    <ExchangeFormStyle>
      <FlexRow style={{ marginBottom: "1rem" }}>
        <FromInput
          inputType="text"
          inputId="fromCount"
          labelText="전환 수량 (FROM)"
          placeholder="전환할 수량을 입력하세요."
          inputState={[fromCount, setFromCount]}
        />
        <Select selectState={[fromSelect, setFromSelect]} />
      </FlexRow>
      <FlexRow style={{ marginBottom: "1rem" }}>
        <ToInput
          inputType="text"
          inputId="fromCount"
          labelText="전환 수량 (TO)"
          readOnly={true}
          inputData={toCount}
        />
        <Select selectState={[toSelect, setToSelect]} />
      </FlexRow>
      <div>
        <Button
          text="환전"
          onClick={onClickExchange}
          color={disabled ? "gray" : "cobalt"}
          disabled={disabled}
        />
      </div>
      {!!getValue.length && <Exchanged exchangedList={recentExchanged} />}
    </ExchangeFormStyle>
  );
};

export default ExchangeForm;

const ExchangeFormStyle = styled.div`
  flex: 3;
`;
