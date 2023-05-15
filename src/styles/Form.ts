import { styled } from "styled-components";

export const FormBackground = styled.div`
  background: ${({ theme }) => theme.palette.grayLight};
  border-radius: 10px;
`;

export const InputStyle = styled.input`
  border: none;
  background: transparent;
  font-weight: bold;
  outline: none;
`;
