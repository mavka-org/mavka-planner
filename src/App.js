import './index.css'
import Landing from './pages/Landing/Landing'
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
          <Landing />
        </div>
      </ThemeProvider>
  );
}

// let program_json = require('./models/program/sample_json.json')
// let prog = new Program(program_json);
// console.log(prog)

export default App;
