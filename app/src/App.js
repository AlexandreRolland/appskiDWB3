import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import MainRouter from './app/routers/MainRouter';

const primaryTheme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        },
        contained: {
          // backgroundColor: 'orange',
        }
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <BrowserRouter>
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
