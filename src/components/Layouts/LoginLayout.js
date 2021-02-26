import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Theme from './Theme';

const LoginLayout = ({ children }) => (
  <Theme>
    <Flex h="calc(100vh)">
      <Box maxH="calc(100vh)" w="100%" p={6} bg="#f7fafc" overflowY="auto" overflowX="visible">
        <main>{children}</main>
      </Box>
    </Flex>
  </Theme>
);

export default LoginLayout;
