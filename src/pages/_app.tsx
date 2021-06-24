import { ChakraProvider } from "@chakra-ui/react";
import MainHeader from "../components/organisms/MainHeader";
import Player from "../components/organisms/Player";
import AppTemplate from "../components/templates/AppTemplate";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppTemplate AsideComponent={<Player />}>
        <MainHeader />
        <Component {...pageProps} />
      </AppTemplate>
    </ChakraProvider>
  );
}

export default MyApp;
