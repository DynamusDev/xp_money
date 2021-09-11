import { useBreakpointValue } from "@chakra-ui/media-query";
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
      h={useBreakpointValue({ base: "80px", lg: "200px" })}
      justify={"space-between"}
      gridGap={"10px"}
      p={"20px"}
      bg={"gray.900"}
    >
      <Text
        fontFamily={"Allison"}
        fontSize={useBreakpointValue({ base: "24px", lg: "40px" })}
      >
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
        h={useBreakpointValue({ base: "30px", lg: "50px" })}
        borderRadius={"4px"}
        w={useBreakpointValue({ base: "120px", lg: "200px" })}
        fontSize={useBreakpointValue({ base: "12px", lg: "16px" })}
      >
        Nova transação
      </Button>
    </Flex>
  );
}
