import { ReactChild, useState } from "react";
import { Header } from "./Header";
import { Flex } from "./_UI_/Flex";
import { TransactionModal } from "./TransactionModal";

interface LayoutProps {
  children: ReactChild;
  hiddenHeader?: boolean;
}

export function Layout(props: LayoutProps) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Flex
      overflowY={"hidden"}
      direction={"column"}
      height={"100vh"}
      w={"100%"}
      bg={"gray.800"}
    >
      {!props.hiddenHeader && (
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      )}
      <Flex>{props.children}</Flex>
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Flex>
  );
}
