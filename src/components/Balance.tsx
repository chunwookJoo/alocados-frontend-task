import { styled } from "styled-components";
import { COIN_ITEM } from "../utils/constants/coinItem";

const Balance = () => {
  return (
    <BalanceStyle>
      <h2>요약</h2>
      <ul>
        {COIN_ITEM.map(({ id, name, balance }) => (
          <li key={id}>
            <div>{name}</div>
            <div>{balance}</div>
          </li>
        ))}
      </ul>
    </BalanceStyle>
  );
};

export default Balance;

const BalanceStyle = styled.aside`
  background: #f5f5f5;
  border-radius: 10px;
`;
