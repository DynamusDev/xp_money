import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { api, sock } from "../services/api";
import socketio from "socket.io-client";

interface TransactionsProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  user: number;
  type: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<TransactionsProps, "id" | "createdAt">;

interface TransactionsContextData {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  loadingCreateTransaction: boolean;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  const [loadingCreateTransaction, setLoadingCreateTransaction] =
    useState(false);
  const socket = useMemo(
    () => socketio(sock, { transports: ["websocket"] }),
    []
  );

  useEffect(() => {
    api
      .get("transactions/list")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  useEffect(() => {
    socket.on("transaction", (data: TransactionsProps) => {
      setTransactions([...transactions, data]);
    });
  }, [socket, transactions]);

  async function createTransaction(transactionImput: TransactionInput) {
    setLoadingCreateTransaction(true);
    try {
      const response = await api.post("/transactions/create", transactionImput);
      const { transaction } = response.data;

      setTransactions([...transactions, transaction]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingCreateTransaction(false);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, loadingCreateTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
