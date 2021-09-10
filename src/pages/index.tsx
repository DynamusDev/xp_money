import { useState } from "react";
import { Layout } from "../components/Layout";
import { Sumary } from "../components/Sumary";
import { TransactionsTable } from "../components/TransactionsTable";
import { Box } from "../components/_UI_/Box";
import { TransactionModal } from "../components/TransactionModal";
import { Header } from "../components/Header";
export default function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Layout>
      <Box w={"100vw"} h={"100vh"}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Sumary />
        <TransactionsTable />
        <TransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </Box>
    </Layout>
  );
}
