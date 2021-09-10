import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import "../styles/globals.css";
import { TransactionsProvider } from "../hooks/useTransactions";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </TransactionsProvider>
  );
}

export default MyApp;
