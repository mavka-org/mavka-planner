import './index.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PlannerPage from './pages/PlannerPage/PlannerPage';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import ChooseTopics from './pages/PlannerPage/PlannerSetupScreen';
import TopicPage from './pages/TopicPage/TopicPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
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

    h1: {
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '43px',
      color: 'black',
      fontFamily: 'Gilroy-Regular',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '29px',
      fontWeight: 'bold',
      color: '#333333',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '21px',
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
    },
    subtitle1: {
      fontWeight: "normal",
      fontSize: '21px',
      lineHeight: '25px',
      color: '#333333',
    },
    body1: {
      fontSize: '18px',
      lineHeight: '21px',
      color: '#333333',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '17px',
      fontWeight: '300',
      color: '#333333',
    }


  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/planner" component={PlannerPage} />
          <Route path="/choosetopics" component={ChooseTopics} />
          <Route path="/math/topic" component={TopicPage} />
          <Route path="/program" component={ProgramPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
