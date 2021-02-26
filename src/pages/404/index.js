import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box>
      <Heading>Awesome 404 page</Heading>
      <Link to="/admin/dashboard">Dashboard</Link>
    </Box>
  );
}

export default NotFound;
