import { Layout } from "../components/Layout";
import { Flex } from "../components/_UI_/Flex";
import { Text } from "../components/_UI_/Text";
import { theme } from "../theme/theme";

export default function Home() {
  return (
    <Layout>
      <Flex direction={"column"} w={"100%"} p={"30px"}>
        <Text lineHeight={"30px"} fontSize={"30px"}>
          Desenvolvedor Full-Stack com{" "}
          <span style={{ color: theme.colors.secondary["dark"] }}>
            4 anos de experiência
          </span>
        </Text>
        <Text
          color={"gray.600"}
          mt={"10px"}
          w={"100%"}
          lineHeight={"20px"}
          fontSize={"18px"}
        >
          Focado em tecnologias da stack{" "}
          <span style={{ color: theme.colors.primary["main"] }}>
            Javascript
          </span>{" "}
          e{" "}
          <span style={{ color: theme.colors.secondary["dark"] }}>
            Typescript
          </span>{" "}
          como NodeJs, ReactJS e React-Native
        </Text>
      </Flex>
    </Layout>
  );
}
