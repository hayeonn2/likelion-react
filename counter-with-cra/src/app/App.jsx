import "./App.css";

// 이미지 에셋 불러오기
import logo from "../assets/logo.svg";

function App() {
  console.log("rendering App Component");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="리액트" />
        <p>
          Edit <code>src/App.js</code> 파일을 수정하면{" "}
          <abbr title="Hot Module Replacement">HMR</abbr>, Live Reload 됩니다.
        </p>
        {/* noopener ~ 보안상의 문제로 넣어줌 */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 배우러 가자!
        </a>
      </header>
    </div>
  );
}

export default App;
