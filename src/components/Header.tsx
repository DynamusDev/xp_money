import { Flex } from "./_UI_/Flex";
import { Text } from "./_UI_/Text";
import { Button } from "./_UI_/Button";
import theme from "@chakra-ui/theme";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Flex
      w={"100%"}
      h={"200px"}
      justify={"space-between"}
      gridGap={"10px"}
      p={"20px"}
      bg={"gray.800"}
    >
      <Text fontFamily={"Allison"} fontSize={"50px"}>
        XP Money
      </Text>

      <Button
        onClick={onOpenNewTransactionModal}
        style={{
          outline: "none",
        }}
        _hover={{
          background: theme.colors.gray["700"],
        }}
        bg={"gray.700"}
        h={"50px"}
        borderRadius={"4px"}
        w={"200px"}
      >
        Nova transação
      </Button>
    </Flex>
  );
}
