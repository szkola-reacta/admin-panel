import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import AdminLayout from './components/Layouts/AdminLayout';
import SecureRoute from './components/SecureRoute';

const renderRoutes = () => {
  return <Switch>
    <SecureRoute path="/admin/dashboard">
      <Dashboard />
    </SecureRoute>
  </Switch>;
};

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/admin/:path?">
            <AdminLayout>{renderRoutes()}</AdminLayout>
          </Route>


          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route component={NotFound} />

        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
