import { Layout } from "../components/Layout";
import { Sumary } from "../components/Sumary";
import { TransactionsTable } from "../components/TransactionsTable";
import { Box } from "../components/_UI_/Box";
export default function Home() {
  return (
    <Layout>
      <Box w={"100vw"} h={"100%"}>
        <Sumary />
        <TransactionsTable />
      </Box>
    </Layout>
  );
}
