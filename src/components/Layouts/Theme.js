import React from 'react';

const mainTheme = {};

const ThemeProvider = ({ children }) => <div>{children}</div>;

const Theme = ({ children }) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
);

export default Theme;
