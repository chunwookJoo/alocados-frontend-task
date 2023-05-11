import { styled } from "styled-components";
import { buttonPropsType } from "../types/button";

const Button = ({ text }: buttonPropsType) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: "cobalt";
  border-radius: 10px;
`;
