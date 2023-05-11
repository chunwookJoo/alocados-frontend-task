import { styled } from "styled-components";
import { PageLayout } from "../styles/Layouts";
import Balance from "../components/Balance";
import PageTitle from "../components/PageTitle";
import ExchangeForm from "../components/ExchangeForm";

const ExchangePage = () => {
  return (
    <PageLayout>
      <PageTitle title="환전하기" />
      <FlexRow>
        <Balance />
        <ExchangeForm />
      </FlexRow>
    </PageLayout>
  );
};

export default ExchangePage;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;
