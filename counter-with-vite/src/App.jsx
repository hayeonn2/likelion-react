import "./App.css"
import { Button } from "./components/Button/Button"

function App() {
  return (
    <div className="App">
      <h2>Button 컴포넌트(stateless)</h2>
      <Button>primary</Button>
      <Button>secondary</Button>
    </div>
  )
}

export default App
