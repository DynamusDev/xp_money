import { useMemo } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Flex } from "./_UI_/Flex";
import { Button } from "./_UI_/Button";
import { Text } from "./_UI_/Text";
import { FaGithub } from "react-icons/fa";
import { Image } from "./_UI_/Image";
import { theme } from "../theme/theme";

export function Header() {
  const router = useRouter();

  const aboutButtonTextColor = useMemo(() => {
    if (router.pathname === "/about") return "surface";
    return theme.colors.gray["800"];
  }, [router]);

  const githubButtonTextColor = useMemo(() => {
    if (router.pathname === "/github") return "surface";
    return theme.colors.gray["800"];
  }, [router]);

  return (
    <Flex
      w={"100%"}
      align={"center"}
      p={"20px"}
      justify={"space-between"}
      h={useBreakpointValue({ base: "50px", lg: "80px" })}
      bg={"gray.1000"}
    >
      <Flex align={"center"}>
        <Image
          height={"40px"}
          mr={"10px"}
          borderRadius={"50%"}
          src={"https://github.com/dynamusdev.png"}
          alt={"Alexandre"}
          loading={"lazy"}
        />
        <Text as={"h1"} fontSize={"20px"} color={"gray.600"}>
          Alexandre Nascimento
        </Text>
      </Flex>
      <Flex
        as={"nav"}
        cursor={"pointer"}
        bg={"transparent"}
        _hover={{ background: "transparent" }}
        color={aboutButtonTextColor}
        onClick={() => router.push("/about")}
      >
        Sobre
      </Flex>
      <Flex
        as={"nav"}
        cursor={"pointer"}
        bg={"transparent"}
        color={githubButtonTextColor}
        align={"center"}
      >
        <FaGithub style={{ marginRight: "5px" }} size={"20px"} />
        Github
      </Flex>
    </Flex>
  );
}
