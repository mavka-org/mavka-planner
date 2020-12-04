import './index.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Planner from './pages/Planner/Planner';
import ChooseTopics from './pages/Planner/ChooseTopics';
import Topic from './pages/Topic/Topic';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff"
    },
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
    body1: {
      fontSize: '18px',
      lineHeight: '21px',
      color: 'black',
      fontFamily: 'Gilroy-Regular',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '43px',
      color: 'black',
      fontFamily: 'Gilroy-Regular',
    },
    h2: {
      fontSize: '36px',
      lineHeight: '43px',
      color: '#828282',
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: '21px',
      lineHeight: '25px',
      color: '#333333',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/planner" component={Planner} />
          <Route path="/choosetopics" component={ChooseTopics} />
          <Route path="/topic" component={Topic} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
