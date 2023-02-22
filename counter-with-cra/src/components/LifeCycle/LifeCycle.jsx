import React from "react";
// Component's Life Cycle (컴포넌트의 생명주기)
// 탄생 (constructor) -> (render) | render 단계 (리액트가 할 수 있는 순수한 단계.. 인풋과 아웃풋이 같다.)
// 성장
// 죽음

// 라이프 사이클 메서드
//

class LifeCycle extends React.component {
  /*   constructor(props) { 생략하기로 했다.
    super(props);

    this.state = {
      message: "loading...",
    };

    // web api (react가 하는 일이 아니다.)
    // this is side effect 쓰면안됨!!!!!!
    // timer (시간제어 하는 것들)
    setTimeout(() => {
      this.setState({
        message: "wow",
      });
    });
  } */

  /* -------------------------------------------------------------------------- */
  /*                                  render 단계                                 */
  /* -------------------------------------------------------------------------- */
  state = {
    message: "loading...",
  };
  render() {
    console.log(document.querySelector(".LifeCycle")); // 안나온다!!!
    return;
    <>
      <div className="LifeCycle">컴포넌트의 생명 주기</div>
      <input id="select-me" />;
    </>;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  commit 단계                                 */
  /* -------------------------------------------------------------------------- */
  // 실제 돔에 접근, 조작 (DOM 스크립트 또는 바닐라 스크립트)
  // 컴포넌트가 마운트 된 이후(1회)
  componentDidMount() {
    console.log("여기서는 실제 돔에 접근이 가능해요."); // 접근이 가능해!!
    //console.log(document.querySelector(".LifeCycle"));

    // 바닐라 프로그래밍 (리액트가 아닌 것 === 사이드 이팩트)
    const lifecycleElement = document.querySelector(".LifeCycle");
    const selectMeInput = document.querySelector(".");

    lifecycleElement?.addEventListener("click", (e) => {
      lifecycleElement.style.cssText = /* css */ `
      background: red;
      color: black;
      font-size: 3rem;
      padding: 20px;
      `;

      // 문서의 인풋 요소를 찾아서 초점 이동
      setTimeout(() => {
        selectMeInput.value = "선택!!";
        selectMeInput.focus();
      });
    });
  }
  /*   componentDidMount = () => {
  이거는 핸들로 시작할때..? 이벤트리스너..?일때 사용한다.
  } */
}

export default LifeCycle;
