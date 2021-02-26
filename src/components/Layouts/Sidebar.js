import React from 'react';
import { Box, Link } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Box w="15rem" bg="gray.100" display={{ sm: 'none', md: 'block' }}>
      <Box pt={10} pb={6}>
        <Link to="/dashboard" label="Dashboard" />
        <Link to="/files" label="Files" />
        <Link to="/videos" label="Videos" />
        <Link to="/courses" label="Courses" />
        <Link to="/products" label="Products" />
      </Box>
    </Box>
  );
}

export default Sidebar;
