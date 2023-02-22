import "./App.css";
import { CounterFunction, CounterClass } from "../components"; // 컴포넌트라는 엔트리들에서 받아온다.

function App() {
  return (
    <div className="App">
      <h2>함수 컴포넌트</h2>
      <CounterFunction count={2} />
      <h2>클래스 컴포넌트</h2>
      <CounterClass step={3} />
    </div>
  );
}

export default App;
