import React from "react";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333"
    },
    secondary: {
      main: "#1AB2A8"
    },
    opposite: {
      main: '#fff',
    }

  },
  typography: {
    fontFamily: [
      '"SF Display"',
      '-apple-system',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    h1: {
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '43px',
      color: '#333333',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '29px',
      fontWeight: 'bold',
      color: '#333333',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 'bold',
      color: '#333333',
    },
    h4: {
      fontSize: '14px',
      lineHeight: '17px',
      fontWeight: '600',
      color: '#333333',
    },
    h6: {
      fontWeight: '600',
      fontSize: '20px'
    },
    subtitle1: {
      fontSize: '18px',
      lineHeight: '21px',
      color: '#333333',
      fontWeight: '300',
    },
body1: {
  fontSize: '14px',
    lineHeight: '20px',
      color: '#333333',
    },
body2: {
  fontSize: '14px',
    color: '#333333',
    },
button: {
  fontWeight: '300',
    fontSize: '18px'
}
  },
});

const ThemeProvider = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider;
