import './index.css'
//import Program from  './models/program/program'
//import Topic from  './models/program/topic'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'

function App() {
  return (
    <div className="App">
      <Button onClick = {() => alert ("мавка")} type="black">telegram</Button>
      <Input placeholder={'e-mail'}/ >
    </div>
  );
}

// let program_json = require('./models/program/sample_json.json')
// let prog = new Program(program_json);
// console.log(prog)

export default App;
