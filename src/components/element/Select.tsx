import { COIN_ITEM } from "../../utils/constants/coinItem";
import { SelectPropsType } from "../../types/select";

const Select = ({ selectState }: SelectPropsType) => {
  const [selected, setSelected] = selectState;

  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {COIN_ITEM.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
