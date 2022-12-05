import { createTheme } from "@mui/material/styles";
import '@fontsource/quicksand'


const theme = createTheme({
  palette: {
    primary: {
      light: '#435278',
      main: '#162a4c',
      dark: '#000024',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7c55',
      main: '#df4a29',
      dark: '#a60c00',
      contrastText: '#fff',      
    },
    background: {
      default: "#162a4c"
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily:["Quicksand", "sans-serif"].join(','),
    h1: {
      fontSize: 48,
      marginBottom:12,
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root:{
          color: 'red',
          fontSize: '2rem'
        }
      }
    }
  }
});

// https://coolors.co/f9c02a-4aaaba-df4a29-172b4d-ab6035
// {"Orange Yellow":"f9c02a",
// "Pacific Blue":"4aaaba",
// "Vermilion":"df4a29",
// "Space Cadet":"172b4d",
// "Brown Sugar":"ab6035"}


export default theme;