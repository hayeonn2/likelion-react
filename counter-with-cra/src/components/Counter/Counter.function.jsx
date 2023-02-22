import { useState } from "react"; // node-modules에서 빼오는 것
// imn : import no module
//import "./Counter.style.css";

//imd : import destructing
// imp 로 받을 수 있다.
import styles from "./Counter.module.css";

function Counter(props) {
  //함수 안에 지역 변수 선언 (리액트는 지역변수가 바뀐다해서 업데이트가 되는게 아니다.)
  //et count = 1;

  // 리액트가 사용할 수 있도록 해주는 리액트 훅 사용해야한다.
  // 상태 관리 React.useState()
  // 객체 { prop1, prop2 }
  // 배열 [ state, setState ]
  // use를 쓰면 많은 훅들이 있다. (공부해야함)
  // props값이 있으면 초기화하세요
  // count를 바꾸려면 setCount를 써야한다.(규칙임)
  // setCount를 꺼내지않으면 업데이트를 절~대 못한다. const [count] = 일 때...
  const [count, setCount] = useState(props.count); // [state상태, setState상태를 업데이트하는 함수]

  // 함수 안에 이벤트 청취 함수를 작성합니다. 이벤트 리스너
  // 함수는 this를 쓰지 않는다.
  const handlerIncrement = () => {
    // console.log("카운트 값 증가");
    // count++; //수정(mutation)
    setCount(count + props.step);
  };

  // only class component
  // life cycle methods

  const handlerDecrement = () => {
    //count--;
    setCount(count - props.step);
  };
  return (
    <div className={styles.container}>
      <button type="button" onClick={handlerIncrement}>
        +
      </button>
      <output>{count}</output>
      <button type="button" onClick={handlerDecrement}>
        -
      </button>
    </div>
  );
}

// static staticMethod
// Counter.staticMethod = function () {};
// static이기 때문에 밖에 쓴다. 모든 컴포넌트의 기본값이다.
// 함수는 렌더링 될때마다 통째로 초기화가 된다. 그래서 스테틱이 없다. (함수안에서 쓸 수 없어)
// 그래서 바깥쪽에 쓰면 스테틱이다. (리액트의 방식)
// like class's static mamber
Counter.defaultProps = {
  count: 0,
  min: 1,
  max: 10,
  step: 1,
};

export default Counter;
