import { useBreakpointValue } from "@chakra-ui/media-query";
import { useTransactions } from "../hooks/useTransactions";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
import { Flex } from "./_UI_/Flex";
import { Text } from "./_UI_/Text";

export function Sumary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += Number(transaction.amount);
        acc.total += Number(transaction.amount);
      } else {
        acc.withdraws -= Number(transaction.amount);
        acc.total -= Number(transaction.amount);
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Flex
      w={"100%"}
      align={"center"}
      justify={"center"}
      gridGap={useBreakpointValue({ base: "10px", lg: "2rem" })}
      p={useBreakpointValue({ base: "10px", lg: "30px" })}
      mt={useBreakpointValue({ base: "0", lg: "-100px" })}
    >
      <Flex
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        py={useBreakpointValue({ base: "5px", lg: "10px" })}
        background={useBreakpointValue({ base: "transparent", lg: "gray.700" })}
        borderRadius={"0.4rem"}
        h={useBreakpointValue({ base: "auto", lg: "150px" })}
        w={useBreakpointValue({ base: "100%", lg: "25%" })}
      >
        <Flex gridGap={"10px"} align={"center"} justify={"center"}>
          <Text fontSize={useBreakpointValue({ base: "12px", lg: "18px" })}>
            Entradas
          </Text>

          <FaArrowAltCircleDown
            size={useBreakpointValue({ base: "12px", lg: "18px" })}
            color={"#44DB58"}
          />
        </Flex>
        <Text
          fontSize={useBreakpointValue({ base: "16px", lg: "30px" })}
          color={"green"}
        >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        background={useBreakpointValue({ base: "transparent", lg: "gray.700" })}
        borderRadius={"0.4rem"}
        py={useBreakpointValue({ base: "5px", lg: "10px" })}
        h={useBreakpointValue({ base: "auto", lg: "150px" })}
        w={useBreakpointValue({ base: "100%", lg: "25%" })}
      >
        <Flex gridGap={"10px"} align={"center"} justify={"center"}>
          <Text fontSize={useBreakpointValue({ base: "12px", lg: "18px" })}>
            Saídas
          </Text>
          <FaArrowAltCircleUp
            size={useBreakpointValue({ base: "12px", lg: "18px" })}
            color={"#FF7B80"}
          />
        </Flex>
        <Text
          fontSize={useBreakpointValue({ base: "16px", lg: "30px" })}
          color={"red"}
        >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        background={useBreakpointValue({ base: "transparent", lg: "gray.700" })}
        borderRadius={"0.4rem"}
        py={useBreakpointValue({ base: "5px", lg: "10px" })}
        h={useBreakpointValue({ base: "auto", lg: "150px" })}
        w={useBreakpointValue({ base: "100%", lg: "25%" })}
      >
        <Flex gridGap={"10px"} align={"center"} justify={"center"}>
          <Text fontSize={useBreakpointValue({ base: "12px", lg: "18px" })}>
            Total
          </Text>
          <FaDollarSign
            size={useBreakpointValue({ base: "12px", lg: "18px" })}
          />
        </Flex>
        <Text fontSize={useBreakpointValue({ base: "16px", lg: "30px" })}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </Text>
      </Flex>
    </Flex>
  );
}
