import { ReactChild } from "react";
import { Header } from "./Header";
import { Box } from "./_UI_/Box";
import { Flex } from "./_UI_/Flex";

interface LayoutProps {
  children: ReactChild;
}

export function Layout(props: LayoutProps) {
  return (
    <Box height={"100vh"} bg={"gray.900"}>
      <Header />
      <Flex>{props.children}</Flex>
    </Box>
  );
}
