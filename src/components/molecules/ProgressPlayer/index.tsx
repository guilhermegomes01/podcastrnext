import React from "react";

import { HStack, Text, Progress } from "@chakra-ui/react";

const ProgressPlayer = () => (
  <HStack spacing="2" fontSize="sm" align="center">
    <Text>00:00</Text>
    <Progress
      colorScheme="whiteAlpha"
      bg="purple.300"
      size="xs"
      w="100%"
      borderRadius="2px"
      value={0}
    />
    <Text>00:00</Text>
  </HStack>
);

export default ProgressPlayer;
