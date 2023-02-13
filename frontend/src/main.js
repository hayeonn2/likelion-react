import "./utils/supportJavaScript.js";
import "./vanilla.script.js";

// console.log('React 개발 시작하기! 😊');

// 명령형 프로그래밍
// const root = document.getElementById("root");
// const headline = root.querySelector("hi");

// document.addEventListener("click", () => {
// headeline.textContent = "update headline content";
// });

// 선언형 프로그래밍
import { state, render, update } from "./vanilla.script.js";

render(state);
document.addEventListener("click", () => {
  update({
    subjects: "React는 선언형 프로그래밍을 추구합니다.",
  });
  console.log(state);
});
