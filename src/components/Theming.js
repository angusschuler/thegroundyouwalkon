import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',//'#dfeef6',
      main: '#adbcc3',
      dark: '#7e8c93',
      contrastText: '#000',
    },
    secondary: {
      light: '#5daad7',
      main: '#207ba5',
      dark: '#004f76',
      contrastText: '#fff',
    },
  },
  typography:{
    fontFamily: [
      'Monospace',
    ].join(','),
  }
  
});

function Theming(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

export default Theming