import './index.css'
import Login from './screens/Login/Login';
import Program from  './models/program/program'
import Topic from  './models/program/topic'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

let program_json = require('./models/program/sample_json.json')
let prog = new Program(program_json);
console.log(prog)

export default App;
