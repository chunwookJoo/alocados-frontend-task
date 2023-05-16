import { FormBackground } from "../styles/Form";
import { FlexRow } from "../styles/Flex";

const ExchangeSorting = (props: {
  onClick: () => void;
  isSorting: boolean;
}) => {
  const { onClick, isSorting } = props;

  return (
    <FormBackground style={{ padding: "12px", marginBottom: "1rem" }}>
      <FlexRow
        style={{ justifyContent: "space-between", cursor: "pointer" }}
        onClick={onClick}
      >
        <span>환전시간 {isSorting ? "∨" : "∧"}</span>
        <span>환전금액</span>
      </FlexRow>
    </FormBackground>
  );
};

export default ExchangeSorting;
