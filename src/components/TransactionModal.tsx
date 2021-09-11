import { FormEvent, useCallback, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useTransactions } from "../hooks/useTransactions";
import { Text } from "./_UI_/Text";
import { Input } from "./_UI_/Input";
import { theme } from "../styles/theme";
import { Flex } from "./_UI_/Flex";
import { Button } from "./_UI_/Button";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { darken, transparentize } from "polished";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await createTransaction({
        title,
        amount: Number(amount),
        category,
        type,
        user: 1,
      });

      setTitle("");
      setAmount("");
      setCategory("");
      setType("");
      onRequestClose();
    },
    [amount, category, createTransaction, onRequestClose, title, type]
  );

  return (
    <Modal isOpen={isOpen} onClose={onRequestClose}>
      <ModalOverlay />
      <ModalContent
        w={"100%"}
        h={useBreakpointValue({ base: "70%", lg: "auto" })}
        maxWidth={"576px"}
        bg={"gray.800"}
      >
        <ModalCloseButton />
        <Text fontSize={"24px"} m={"10px auto 32px"}>
          Cadastrar transação
        </Text>
        <Flex
          direction={"column"}
          as={"form"}
          onSubmit={handleCreateNewTransaction}
        >
          <Input
            placeholder={"Título"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            w={"calc(100% - 40px)"}
            m={"0 auto"}
            p={"0 24px"}
            height={useBreakpointValue({ base: "50px", lg: "60px" })}
            borderRadius={"0.4rem"}
            border={`1px solid ${theme.colors.gray["100"]}`}
            fontWeight={"400"}
            fontSize={"16px"}
          />

          <Input
            placeholder={"Valor"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            w={"calc(100% - 40px)"}
            m={"24px auto 0"}
            p={"0 24px"}
            height={useBreakpointValue({ base: "50px", lg: "60px" })}
            borderRadius={"0.4rem"}
            border={`1px solid ${theme.colors.gray["100"]}`}
            fontWeight={"400"}
            fontSize={"16px"}
          />

          <Flex margin={"24px auto"} gridGap={"32px"}>
            <Button
              onClick={() => setType("deposit")}
              style={{
                outline: "none",
              }}
              border={`1px solid ${transparentize(0.9, theme.colors.green)}`}
              background={
                type === "deposit"
                  ? transparentize(0.9, theme.colors.green)
                  : "gray.800"
              }
              _hover={{ borderColor: darken(0.1, theme.colors.green) }}
            >
              <FaArrowAltCircleDown size={"20px"} color={theme.colors.green} />
              <Text
                as={"span"}
                display={"inline-block"}
                marginLeft={"16px"}
                fontSize={"16px"}
              >
                {" "}
                Entrada{" "}
              </Text>
            </Button>
            <Button
              onClick={() => setType("withdraw")}
              style={{
                outline: "none",
              }}
              border={`1px solid ${transparentize(0.9, theme.colors.red)}`}
              background={
                type === "withdraw"
                  ? transparentize(0.9, theme.colors.red)
                  : "gray.800"
              }
              _hover={{ borderColor: darken(0.1, theme.colors.red) }}
            >
              <FaArrowAltCircleUp size={"20px"} color={theme.colors.red} />
              <Text
                as={"span"}
                display={"inline-block"}
                marginLeft={"16px"}
                fontSize={"16px"}
              >
                {" "}
                Saída{" "}
              </Text>
            </Button>
          </Flex>
          <Input
            placeholder={"Categoria"}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            w={"calc(100% - 40px)"}
            m={"0 auto"}
            p={"0 24px"}
            height={useBreakpointValue({ base: "50px", lg: "60px" })}
            borderRadius={"0.4rem"}
            border={`1px solid ${theme.colors.gray["100"]}`}
            fontWeight={"400"}
            fontSize={"16px"}
          />

          <Button
            w={useBreakpointValue({ base: "70%", lg: "calc(100% - 40px)" })}
            _hover={{ background: darken(0.1, theme.colors.green) }}
            p={"0 16px"}
            height={useBreakpointValue({ base: "35px", lg: "60px" })}
            bg={"green"}
            borderRadius={"4rem"}
            fontSize={"16px"}
            border={"0"}
            margin={useBreakpointValue({
              base: "60px auto 0",
              lg: "24px auto 0",
            })}
            fontWeight={"600"}
            type={"submit"}
          >
            Cadastrar
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
