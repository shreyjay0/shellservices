import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./style/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
