import { Flex } from "./_UI_/Flex";
import { Text } from "./_UI_/Text";
import { NavButton } from "./NavButton";
import { useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w={"100%"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      gridGap={"10px"}
      p={"20px"}
      bg={"transparent"}
    >
      <Text
        lineHeight={"30px"}
        fontFamily={"Allison"}
        color={"primary.light"}
        as={"h1"}
        fontSize={"45px"}
      >
        Alexandre Nascimento
      </Text>
      <Flex
        w={useBreakpointValue({ base: "100%", lg: "50%" })}
        justify={"space-around"}
        align={"center"}
      >
        <NavButton to={"início"} />
        <NavButton to={"projetos"} />
        <NavButton to={"blog"} />
      </Flex>
    </Flex>
  );
}
