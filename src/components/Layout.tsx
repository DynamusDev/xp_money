import { ReactChild } from "react";
import { Box } from "./_UI_/Box";
import { Flex } from "./_UI_/Flex";

interface LayoutProps {
  children: ReactChild;
}

export function Layout(props: LayoutProps) {
  return (
    <Box height={"100vh"} bg={"gray.700"}>
      <Flex>{props.children}</Flex>
    </Box>
  );
}
