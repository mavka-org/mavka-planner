import './index.css'
import Landing from './pages/Landing/Landing'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff"
    }
  },

});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
          <div className="App">
            <Landing />
          </div>
        </Container>
      </ThemeProvider>
  );
}

// let program_json = require('./models/program/sample_json.json')
// let prog = new Program(program_json);
// console.log(prog)

export default App;
