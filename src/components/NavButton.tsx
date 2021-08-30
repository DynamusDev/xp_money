import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import { Flex } from "./_UI_/Flex";

interface NavButtonProps {
  to: string;
  icon?: React.ReactElement;
}

export function NavButton(props: NavButtonProps) {
  const router = useRouter();
  const { to } = props;

  const buttonTextColor = useMemo(() => {
    if (
      router.pathname === `/${to}` ||
      (router.pathname === "/" && to === "início")
    )
      return "primary.main";
    return "gray.100";
  }, [router, to]);

  const navigate = useCallback(() => {
    switch (to) {
      case "blog":
        return router.push("blog");
      case "projetos":
        return router.push("projetos");
      default:
        return router.push("/");
    }
  }, [to, router]);

  return (
    <Flex
      as={"nav"}
      cursor={"pointer"}
      bg={"transparent"}
      color={buttonTextColor}
      onClick={navigate}
      align={"center"}
    >
      <Flex mr={"5px"} />
      {to.toLocaleUpperCase()}
    </Flex>
  );
}
