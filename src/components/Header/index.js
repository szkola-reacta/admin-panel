import React, { useState } from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

function Header(props) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      minHeight="3rem"
      px="1rem"
      bg="blue.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Awesome app
        </Heading>
      </Flex>
      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>
      <Box display={{ sm: show ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </Flex>
  );
}

export default Header;
