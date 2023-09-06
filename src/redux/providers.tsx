"use client";
import { Provider } from "react-redux";

// Store
import store from "./store";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export { Providers };
