import classes from "./Button.module.css"
import { Component } from "react"

// rest프롭스는 사용자가 더 쓰기 편하게 하기위해 (열린 컴포넌트. 온클릭에 온마우스엔터가 올지 뭐가 올지 모르니까)
export function Button({ mode, ...restProps /* {prop1, prop2, children} */ }) {
  return <Button type="button" className={classes.component} {...restProps} />
}

Button.defaultProps = {
  mode: "primary", // 'secondary'도 됨 피그마에서 모드라는 부분이 있다.
}
