"use client";

import { Provider } from "react-redux";
import { store } from "@/redux";

interface Props {
  children: React.ReactNode;
}

const MyStoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export { MyStoreProvider };
