import { styled } from "styled-components";
import { PageTitlePropsType } from "../types/pageTitle";

const PageTitle = ({ title }: PageTitlePropsType) => {
  return <StyledPageTitle>{title}</StyledPageTitle>;
};

export default PageTitle;

const StyledPageTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
