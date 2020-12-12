import React, { useContext } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './pages/LandingPage/LandingPage';
import PlannerPage from './pages/PlannerPage/PlannerPage';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import PlannerSetupPage from './pages/PlannerPage/PlannerSetupScreen';
import TopicPage from './pages/TopicPage/TopicPage';
import { UserContext } from './providers/UserProvider';
import TestPage from './pages/TestPage/TestPage';
import { Typography } from '@material-ui/core';

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
const defaultSubject = {
    name: 'математика',
    icon: '♾️',
    id: 'math',
    available: true
  }

const Application = () => {

  const [subject, setSelectedSubject] = React.useState(defaultSubject);
  const user = useContext(UserContext)


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route path="/planner"
            render={(props) => <PlannerPage
              {...props}
              user={user}
              subject={defaultSubject}
              setSelectedSubject={setSelectedSubject}
              />}
          />

          <Route path="/program"
            render={(props) => <ProgramPage
              {...props}
              subject={defaultSubject}
              setSelectedSubject={setSelectedSubject}
              />}
          />

          <Route path="/math/topic/:id" component={TopicPage} />

            <Route path="/test"
              render={(props) => <TestPage
                {...props}
                subject={defaultSubject}
                setSelectedSubject={setSelectedSubject}
                />}
            />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Application;
