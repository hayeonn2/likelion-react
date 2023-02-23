import { createElement as h } from "react";
import classes from "./A11yHidden.module.css";

// classes.focusable
// classes.srOnly 로 쓸 수 있어 충돌이 안난다.

export const A11yHidden = ({
  // as는 렌더링 할 컴포넌트 요소의 (태그) 이름
  // : 뒤에 쓰는 이름이 별칭(지역 변수가 된다.) 트릭!! 속임수이다. 마치 리액트 컴포넌트이름인 것 처럼..
  as: Component,
  // 비표준속성이므로 restProps에서 제외해야 한다. 이런걸 지켜서 설계하자!
  focusable,
  className,
  ...restProps
}) => {
  // h 함수는 React.createElement의 별칭 함수이다.
  // React.createElement(type[, props][, ...children])
  // h(type[, props][, ...children])
  // h(태그이름, props 객체(children포함))
  // return h(as, restProps);

  //console.log(restProps); // as 비표준 속성을 표준요소 속성인거마냥 html안에 넣어준다. 리액트는 이걸몰라!
  // 그래서 as를 빼내야 한다.
  const combinedClassName = `${classes.srOnly} ${
    focusable ? classes.focusable : ""
  } ${className}`.trim();
  return <Component className={combinedClassName} {...restProps} />;
  //return h(as, restProps);
};

// props (외부에서 전달되는 인자 집합)
// 함수 내부에서는 기본값 설정
A11yHidden.defaultPops = {
  as: "span",
  focusable: false,
};
