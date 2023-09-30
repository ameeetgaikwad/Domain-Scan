import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContextProvider from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </ChakraProvider>
  );
}
