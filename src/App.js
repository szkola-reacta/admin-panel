import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Login from './pages/Login';
import Dashboard from './pages/Login';
import AdminLayout from './components/Layouts/AdminLayout';

const renderRoutes = () => (
  <Switch>
    <Route exact path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>
);

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="admin/:path?">
            <AdminLayout>{renderRoutes()}</AdminLayout>
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
