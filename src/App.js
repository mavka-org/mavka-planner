import './index.css'
import Test from './screens/test/test'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Test />
        </div>
      </ThemeProvider>
  );
}

export default App;
