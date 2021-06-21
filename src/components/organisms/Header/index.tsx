import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import Logo from "../../atoms/Logo";

function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", { locale: ptBR });

  return (
    <Flex
      alignItems="center"
      py="8"
      px="16"
      bg="white"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
    >
      <Logo />

      <Text
        ml="8"
        borderLeft="1px solid"
        borderColor="gray.100"
        py="1"
        pr="0"
        pl="8"
      >
        O melhor para você ouvir, sempre
      </Text>

      <Text ml="auto" textTransform="capitalize">
        {currentDate}
      </Text>
    </Flex>
  );
}

export default Header;
