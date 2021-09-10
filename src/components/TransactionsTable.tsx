import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useTransactions } from "../hooks/useTransactions";
import { Box } from "./_UI_/Box";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Box marginTop={"4rem"} p={"10px 10%"}>
      <Table w={"100%"} borderSpacing={"0 8px"}>
        <Thead>
          <Tr>
            <Th
              color={"gray.200"}
              textAlign={"left"}
              lineHeight={"24px"}
              p={"8px 16px"}
            >
              Título
            </Th>
            <Th
              color={"gray.200"}
              textAlign={"left"}
              lineHeight={"24px"}
              p={"8px 16px"}
            >
              Valor
            </Th>
            <Th
              color={"gray.200"}
              textAlign={"left"}
              lineHeight={"24px"}
              p={"8px 16px"}
            >
              Categoria
            </Th>
            <Th
              color={"gray.200"}
              textAlign={"left"}
              lineHeight={"24px"}
              p={"8px 16px"}
            >
              Data
            </Th>
          </Tr>
        </Thead>
        {transactions.map((transaction) => (
          <Tr key={transaction.id}>
            <Td p={"8px 16px"} border={"0"} borderRadius={"0.4rem"}>
              {transaction.title}
            </Td>
            <Td
              color={transaction.type === "withdraw" ? "red" : "green"}
              p={"8px 16px"}
              border={"0"}
              borderRadius={"0.4rem"}
            >
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(transaction.amount)}
            </Td>
            <Td p={"8px 16px"} border={"0"} borderRadius={"0.4rem"}>
              {transaction.category}
            </Td>
            <Td p={"8px 16px"} border={"0"} borderRadius={"0.4rem"}>
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(transaction.createdAt)
              )}
            </Td>
          </Tr>
        ))}
      </Table>
    </Box>
  );
}
