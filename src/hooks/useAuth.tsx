import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { api, sock } from "../services/api";
import {
  safeGetFromLocalStorage,
  safeSaveFromLocalStorage,
} from "../helpers/window";
import { useRouter } from "next/router";
import { FeedbackContext } from "./FeedbackProvider";

interface UserProps {
  id: number;
  name: string;
  email: number;
  image: string;
  messages: string[];
  transactions: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

interface UserProviderProps {
  children: ReactNode;
}

type LoginInput = {
  email: string;
  password: string;
};

interface UserContextData {
  user: UserProps;
  login: (login: LoginInput) => Promise<void>;
  loadingLogin: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const { openToast } = useContext(FeedbackContext);
  const route = useRouter();

  useEffect(() => {
    const getUser: UserProps = JSON.parse(localStorage.getItem("user"));
    if (getUser) {
      setUser(getUser);
    }
  }, []);

  async function login(loginInput: LoginInput) {
    setLoadingLogin(true);
    try {
      const response = await api.post("/login", loginInput);
      const { user, error, status } = response.data;

      if (!user) {
        openToast({
          title: error,
          isError: true,
        });
        return;
      }

      setUser(user);
      safeSaveFromLocalStorage("user", JSON.stringify(user));
      route.push("dashboard");
      return;
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingLogin(false);
    }
  }

  return (
    <UserContext.Provider value={{ login, user, loadingLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);

  return context;
}
