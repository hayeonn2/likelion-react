import classes from "./Button.module.css";
import { tokens } from "@/theme/tokens";
import { getColor } from "@/theme/utils";

const { colors } = tokens;

export function Button({
  mode,
  secondary: isSecondary,
  disabled,
  ...restProps
}) {
  // 함수 컴포넌트 지역 내에 사용하는 함수
  // 프롭스로부터 파생된 지역 변수 (derived) 렌더링과는 아무 상관 없음
  //let isPrimary = !secondary;

  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: !isSecondary
          ? getColor("primary/500")
          : getColor("primary/50"),
        colors: !isSecondary ? getColor("white") : getColor("primary/400"),
      }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: "primary", // 'secondary'
  secondary: false,
  disabled: false,
};

/* -------------------------------------------------------------------------- */

// HTML Standards Component
{
  /* <button></button> */
}

// Custom Component
{
  /* <Button></Button> */
}

// export function Button({ mode, children, onClick, ...restProps }) {
//   console.log(restProps);
//   return <button type="button" className={classes.component} {...restProps} />;
// }

// export function Button({ mode = 'primary', children }) {
//   return (
//     <button type="button" className={classes.component}>
//       {children}
//     </button>
//   );
// }

// const restProps = {
//   onClick,
//   onMounseEnter,
// }

// React.createElement('div', {
//   className: 'parent',
//   children: React.createElement('p', {
//     className: 'child',
//     children: [React.createElement('strong', null, 'Child'), ' 1'],
//     ...restProps
//   }),
// });
