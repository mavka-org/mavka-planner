import React from "react";

import UserProvider from "./providers/UserProvider";
import ThemeProvider from "./providers/ThemeProvider";
import SubjectProvider from "./providers/SubjectProvider";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './pages/LandingPage/LandingPage';
import PlannerPage from './pages/PlannerPage/PlannerPage';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import TopicPage from './pages/TopicPage/TopicPage';
import { analytics } from './services/Firebase/firebase.js'

function App() {

    return (
        <UserProvider>
          <ThemeProvider>
            <SubjectProvider>

              <Router>
                <Switch>
                  <Route exact path="/" component={LandingPage} />

                  <Route path="/planner" component={PlannerPage} />

                  <Route path="/program" component={ProgramPage} />

                  <Route path="/math/topic/:id" component={TopicPage} />

                </Switch>
              </Router>

            </SubjectProvider>
          </ThemeProvider>
        </UserProvider>
    );
}
export default App;
