import { styled } from "styled-components";
import { buttonPropsType } from "../types/button";

const Button = ({ text, onClick, color, disabled }: buttonPropsType) => {
  return (
    <StyledButton onClick={onClick} color={color} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
	padding: 10px; 0;
	margin-bottom:1rem;
	font-weight:bold;
  background: ${({ color, theme }) => color && theme.palette[color]};
  color: #ffffff;
  border: none;
  border-radius: 8px;
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
