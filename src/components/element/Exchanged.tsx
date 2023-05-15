import { styled } from "styled-components";
import { ExchangedState, UnitType } from "../../types/coin";
import { FlexRow } from "../../styles/Flex";
import { FormBackground } from "../../styles/Form";
import { getFormatDigits } from "../../utils/format";

const Exchanged = (props: { exchangedList: ExchangedState }) => {
  const { exchangedDate, fromSelect, fromCount, toSelect, toCount } =
    props.exchangedList;

  const unit: UnitType = {
    Ethereum: "ETH",
    Solana: "SOL",
    BnB: "BNB",
  };
  return (
    <FormBackground style={{ padding: "12px", marginBottom: "1rem" }}>
      <FlexRow style={{ justifyContent: "space-between" }}>
        <DateStyle>{exchangedDate}</DateStyle>
        <FlexRow>
          <span style={{ fontWeight: "bold" }}>
            {getFormatDigits(fromCount, 2)} {fromSelect && unit[fromSelect]}
          </span>
          {">"}
          <span style={{ fontWeight: "bold" }}>
            {getFormatDigits(toCount, 2)} {toSelect && unit[toSelect]}
          </span>
        </FlexRow>
      </FlexRow>
    </FormBackground>
  );
};

export default Exchanged;

const DateStyle = styled.small`
  font-size: 14px;
`;
