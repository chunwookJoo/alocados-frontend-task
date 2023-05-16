import { styled } from "styled-components";
import { SELECT_COIN_ITEM } from "../utils/constants/coinItem";
import { getFormatDigits } from "../utils/format";
import { useRecoilValue } from "recoil";
import { coinBalanceState } from "../atom/recoilCoinState";

const Balance = () => {
  const getCoinBalance = useRecoilValue(coinBalanceState);

  return (
    <AsideStyle>
      <h2>요약</h2>
      <HrStyle />
      <ul>
        {SELECT_COIN_ITEM.map(({ id, name, unit }) => {
          if (id > 0) {
            return (
              <LiStyle key={id}>
                <div>{name}</div>
                <div>
                  <SpanStyle>
                    {getFormatDigits(getCoinBalance[name], 2)} {unit}
                  </SpanStyle>
                </div>
              </LiStyle>
            );
          }
        })}
      </ul>
    </AsideStyle>
  );
};

export default Balance;

const AsideStyle = styled.aside`
  flex: 1;
  padding: 1rem;
  background: ${({ theme }) => theme.palette.grayLight};
  border-radius: 10px;
`;

const LiStyle = styled.li`
  margin-bottom: 1rem;
`;

const SpanStyle = styled.span`
  font-weight: bold;
`;

const HrStyle = styled.hr`
  margin: 1.5rem 0;
`;
