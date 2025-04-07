import Counter from "./component/counter";
import "./App.css"
import Toggle from "./component/toggle";
import Dropdown from "./component/Dropdown";
import ControlCounter from "./component/ControlCounter";
function App() {
  return (
    <>
      <div style={{textAlign: "center"}}>
        <h3>Task-1</h3>
        <Counter />
      </div>
      <div style={{textAlign: "center"}}>
        <h3>Task-2</h3>
        <Toggle />
      </div>
      <div style={{textAlign: "center"}}>
        <h3>Task-3</h3>
        <Dropdown />
      </div>
      <div style={{textAlign: "center"}}>
        <h3>Task-4</h3>
        <ControlCounter />
      </div>
    </>
  )
}
export default App;