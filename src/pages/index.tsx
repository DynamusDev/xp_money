import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const route = useRouter();

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser) {
      route.push("dashboard");
      return;
    }
    route.push("login");
    return;
  }, [route]);

  return <h1></h1>;
}
