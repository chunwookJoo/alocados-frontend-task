import { SELECT_COIN_ITEM } from "../../utils/constants/coinItem";
import { SelectPropsType } from "../../types/select";
import { FormBackground } from "../../styles/Form";
import { styled } from "styled-components";

const Select = ({ selectState }: SelectPropsType) => {
  const [selected, setSelected] = selectState;

  return (
    <FormBackground style={{ display: "flex", padding: "6px" }}>
      <SelectStyle
        value={selected === "" ? "코인을 선택하세요." : selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {SELECT_COIN_ITEM.map(({ id, value, name }) => (
          <OptionStyle key={id} value={value}>
            {name}
          </OptionStyle>
        ))}
      </SelectStyle>
    </FormBackground>
  );
};

export default Select;

const SelectStyle = styled.select`
  background: ${({ theme }) => theme.palette.grayLight};
  border-radius: 10px;
  border: none;
`;

const OptionStyle = styled.option`
  background: #ffffff;
`;
