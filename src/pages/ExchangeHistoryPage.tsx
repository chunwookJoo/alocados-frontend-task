import ExchangeHistory from "../components/ExchangeHistory";
import PageTitle from "../components/PageTitle";
import { PageLayout } from "../styles/Layouts";

const ExchangeHistoryPage = () => {
  return (
    <PageLayout>
      <PageTitle title="환전내역" />
      <ExchangeHistory />
    </PageLayout>
  );
};

export default ExchangeHistoryPage;
