import React, { useState } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { InputGroup } from "./InputGroup";
import { InputRightElement } from "./InputRightElement";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Flex } from "./Flex";

export function PasswordInput(props: ChakraInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const onClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputGroup height={props.height}>
      <ChakraInput {...props} type={showPassword ? "text" : "password"} />

      <InputRightElement onClick={onClick}>
        <Flex mt={"70px"} ml={"0"}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </Flex>
      </InputRightElement>
    </InputGroup>
  );
}
