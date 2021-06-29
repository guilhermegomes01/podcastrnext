import React from "react";

import {
  Flex,
  Box,
  Heading,
  HStack,
} from "@chakra-ui/react";

import ButtonsActionPlayer from "../../molecules/ButtonsActionPlayer";
import ProgressPlayer from "../../molecules/ProgressPlayer";

const Player = () => {
  return (
    <Flex
      py="12"
      px="16"
      h="100vh"
      bgColor="purple.500"
      color="white"
      direction="column"
      align="center"
      justify="space-between"
      width="sm"
      as="aside"
      data-testid="player-component"
    >
      <HStack as="header" spacing="4" align="center">
        <img src="/playing.svg" alt="Tocando agora" />
        <Heading as="h2" fontSize="md">
          Tocando agora
        </Heading>
      </HStack>

      {/* Empty Player */}
      <Flex
        h={80}
        border="1.5px dashed"
        borderColor="purple.300"
        borderRadius="3xl"
        bgGradient="linear(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0)) 100%"
        p="16"
        textAlign="center"
        align="center"
        justify="center"
      >
        <Heading as="h2" fontSize="md">
          Selecione um podcast para ouvir{" "}
        </Heading>
      </Flex>

      <Box as="footer">
        <ProgressPlayer />
        <ButtonsActionPlayer />
      </Box>
    </Flex>
  );
};

export default Player;
