import React from 'react';
import { Box, Link } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Box w="15rem" bg="gray.100" display={{ sm: 'none', md: 'block' }}>
      <Box pt={10} pb={6}>
        <Box><Link to="/dashboard">Dashboard</Link></Box>
        <Box><Link to="/files">Files</Link></Box>
        <Box><Link to="/videos">Video</Link></Box>
        <Box><Link to="/courses">Courses</Link></Box>
        <Box><Link to="/products">Products</Link></Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
