import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function SecureRoute(props) {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  const loginPath = '/login';
  if (!isAuthenticated) {
    // that one is still rendering the Dashboard
    // const renderComponent = () => <Redirect to={{ pathname: loginPath }} />;
    // return <Route {...props} component={renderComponent} render={undefined} />;

    // that works
    return <Redirect to={{ pathname: loginPath }} />;
  }
  return <Route {...props} />;
}

export default SecureRoute;
