import { useState, FormEvent, useCallback } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { darken } from "polished";
import { Layout } from "../components/Layout";
import { Flex } from "../components/_UI_/Flex";
import { Text } from "../components/_UI_/Text";
import { Input } from "../components/_UI_/Input";
import { theme } from "../styles/theme";
import { Button } from "../components/_UI_/Button";
import { useAuth } from "../hooks/useAuth";
import { PasswordInput } from "../components/_UI_/PasswordInput";

export default function Projects() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loadingLogin } = useAuth();

  const handleLogin = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await login({
        email,
        password,
      });

      setEmail("");
      setPassword("");
    },
    [email, login, password]
  );

  return (
    <Layout hiddenHeader>
      <Flex align={"center"} justify={"center"} h={"100vh"} w={"100vw"}>
        <Flex
          as={"form"}
          onSubmit={handleLogin}
          bg={useBreakpointValue({ base: "transparent", lg: "gray.700" })}
          w={"80%"}
          p={useBreakpointValue({ base: "10px", lg: "30px" })}
          direction={"column"}
          maxWidth={"560px"}
          borderRadius={"0.4rem"}
          align={"center"}
        >
          <Text fontFamily={"Allison"} fontWeight={"400"} fontSize={"35px"}>
            XP Money
          </Text>
          <Input
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            w={useBreakpointValue({ base: "100%", lg: "calc(100% - 40px)" })}
            mt={"20px"}
            p={"0 24px"}
            height={useBreakpointValue({ base: "50px", lg: "60px" })}
            borderRadius={"0.4rem"}
            border={`1px solid ${theme.colors.gray["100"]}`}
            fontWeight={"400"}
            fontSize={"16px"}
          />
          <Input
            placeholder={"Senha"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            w={useBreakpointValue({ base: "100%", lg: "calc(100% - 40px)" })}
            mt={"30px"}
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
            isLoading={loadingLogin}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}
