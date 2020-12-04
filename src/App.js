import './index.css'
import Program from './pages/Program/program'
import Login from './pages/Landing/Landing'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    fontFamily: [
      '"Gilroy-Regular"',
      '-apple-system',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      </ThemeProvider>
  );
}

export default App;
