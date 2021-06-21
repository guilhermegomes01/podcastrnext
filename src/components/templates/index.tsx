import React from "react";

import { Box, Flex } from "@chakra-ui/react";

type TemplateProps = {
  AsideComponent: React.ReactNode;
};

const AppTemplate: React.FC<TemplateProps> = ({ AsideComponent, children }) => (
  <Flex>
    <Box as="main" flex="1">{children}</Box>
    {AsideComponent}
  </Flex>
);

export default AppTemplate;
