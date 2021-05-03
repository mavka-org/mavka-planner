import React from "react";

import UserProvider from "./providers/UserProvider";
import ThemeProvider from "./providers/ThemeProvider";
import SubjectProvider from "./providers/SubjectProvider";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './pages/LandingPage/LandingPage';
import PlannerPage from './pages/PlannerPage/PlannerPage';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import TopicPage from './pages/TopicPage/TopicPage';
import TestsPage from './pages/TestsPage/TestsPage';
import PracticeScreen from './pages/PracticeTestPage/PracticeScreen';

import { analytics } from './services/Firebase/firebase.js'

import useScript from 'react-script-hook';




function App() {

  const [loadingKatex, errorKatex] = useScript({ src: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js' });
  const [loadingMathQuill1, errorMathQuill1] = useScript({ src: 'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js' });
  const [loadingMathQuill2, errorMathQuill2] = useScript({ src: 'https://cdn.jsdelivr.net/npm/@edtr-io/mathquill@0.11.0/build/mathquill.min.js' });

  // if (loadingKatex || loadingMathQuill1 || loadingMathQuill2) return <h3>Loading Scripts...</h3>;
  if (errorKatex || errorMathQuill1 || errorMathQuill2) return <h3>Failed to load scripts</h3>;

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

              <Route path="/tests" component={TestsPage} />

              <Route path="/practice/test/:id/question/:questionId" component={PracticeScreen} />

              <Route path="/choose/test" component={TestsPage} />

            </Switch>
          </Router>

        </SubjectProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
export default App;
