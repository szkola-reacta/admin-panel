import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import api from '../../api';

function Dashboard() {
  const history = useHistory();
  const handleMe = async () => {
    try {
      await api.me();
    } catch (error) {}
  };

  const handleLogout = async () => {
    try {
      await api.logout().then(result => {
        if(result.status === 200){
          sessionStorage.removeItem('isAuthenticated');
        };
      });
    } catch (error) {
    } finally {
      history.push('/login');
    }
  };

  return (
    <Box>
      <Button onClick={handleMe}>Me</Button>
      <Button onClick={handleLogout}>Sign out</Button>
    </Box>
  );
}

export default Dashboard;
