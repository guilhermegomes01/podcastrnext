import React from "react";

import { HStack, IconButton } from "@chakra-ui/react";
import {
  IoPlay,
  IoShuffle,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoRepeat,
} from "react-icons/io5";

const ButtonsActionPlayer = () => (
  <HStack spacing="3" align="center" justify="center" mt="10">
    <IconButton
      aria-label="Embaralhar"
      colorScheme="whiteAlpha"
      icon={<IoShuffle />}
      variant="outline"
      border="none"
    />
    <IconButton
      aria-label="Tocar anterior"
      colorScheme="whiteAlpha"
      icon={<IoPlaySkipBack />}
      variant="outline"
      border="none"
    />
    <IconButton
      aria-label="Tocar"
      colorScheme="purple"
      bg="purple.400"
      icon={<IoPlay />}
      variant="solid"
      fontSize="xl"
    />
    <IconButton
      aria-label="Tocar próxima"
      colorScheme="whiteAlpha"
      icon={<IoPlaySkipForward />}
      variant="outline"
      border="none"
    />
    <IconButton
      aria-label="Repetir"
      colorScheme="whiteAlpha"
      icon={<IoRepeat />}
      variant="outline"
      border="none"
    />
  </HStack>
);

export default ButtonsActionPlayer;
