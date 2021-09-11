import React, { ReactChild } from "react";
import { toast as reactToastify } from "react-toastify";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Box } from "./_UI_/Box";
import { Flex } from "./_UI_/Flex";

/**
 * Considerando o tempo de leitura de 80 palavras por minuto
 */
const SECONDS_PER_WORD = 0.8;

/**
 * Retorna o tempo de leitura em milisegundos
 * @param {string} message
 * @returns {number}
 */
export const calculateReadingTime = (message: string): number => {
  const timeInSeconds = message.split(" ").length * SECONDS_PER_WORD;
  return timeInSeconds * 1000;
};

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  hideProgressBar: true,
  autoClose: 2000,
  limit: 1,
})`
  .Toastify__toast {
    border-radius: 8px;
    background: #353646;

    margin: 0;
    min-height: 56px;
  }

  .Toastify__toast--error {
    background: #353646;
    color: #d1d2dc;

    button[aria-label="close"] {
      color: #ff7b80;
      align-self: center;
    }
  }

  .Toastify__toast--success {
    background: #353646;
    color: #127874;
    font-weight: 500;
    border: 1px solid #127874;

    button[aria-label="close"] {
      color: #127874;
      align-self: center;
    }
  }
`;

interface ToastContainerProps {
  children: ReactChild;
  icon: string;
}

function CustomToastContainer(props: ToastContainerProps) {
  return (
    <Flex alignItems={"center"}>
      <Box>{props.children}</Box>
    </Flex>
  );
}

export function Error(props: { children: ReactChild }) {
  return (
    <CustomToastContainer icon={"danger"}>
      {props.children}
    </CustomToastContainer>
  );
}

export function Success(props: { children: ReactChild }) {
  return (
    <CustomToastContainer icon={"success"}>
      {props.children}
    </CustomToastContainer>
  );
}

export const toast = {
  error(message: string) {
    reactToastify.error(<Error>{message}</Error>, {
      autoClose: calculateReadingTime(message),
    });
  },
  success(message: string) {
    reactToastify.success(<Success>{message}</Success>, {
      autoClose: calculateReadingTime(message),
    });
  },
};
