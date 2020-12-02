import './index.css'
import Login from './screens/Login/Login';
import Planner from  './models/planner/planner'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const json = require('./models/planner/sample.json')
let w = new Planner(json);
console.log(w);

export default App;
