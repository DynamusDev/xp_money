import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import "../styles/globals.css";
import { TransactionsProvider } from "../hooks/useTransactions";
import { UserProvider } from "../hooks/useAuth";
import { FeedbackProvider } from "../hooks/FeedbackProvider";

function MyApp({ Component, pageProps }) {
  return (
    <FeedbackProvider>
      <UserProvider>
        <TransactionsProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </TransactionsProvider>
      </UserProvider>
    </FeedbackProvider>
  );
}

export default MyApp;
