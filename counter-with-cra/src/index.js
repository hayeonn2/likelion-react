import { StrictMode } from "react"; // 구조분해로 받아옴!

// React v17
// React v18
import { createRoot } from "react-dom/client";

// Webpack 모듈 번들러 (웹팩이 확장자 알아서 해줌)
// 스크립트 파일 확장자 생략 (.js, .jsx, .ts, .tsx, .json, .wasm)

// CSS 모듈로 네이밍할 때 스트레스 덜 받는다.
import "./styles/global.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
