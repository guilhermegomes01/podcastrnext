import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/organisms/Header";
import Player from "../components/organisms/Player";
import AppTemplate from "../components/templates/AppTemplate";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppTemplate AsideComponent={<Player />}>
        <Header />
        <Component {...pageProps} />
      </AppTemplate>
    </ChakraProvider>
  );
}

export default MyApp;
