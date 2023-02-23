import { arrayOf, number, string, oneOf, oneOfType, shape } from "prop-types";
import classes from "./Nav.module.scss";
import { A11yHidden } from "@/components";

export function Nav({ as, headline, list, ...restProps }) {
  return (
    <nav {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item, index) => (
          <li key={item.id}>
            <a href={item.to}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
// schema설계 (필수적으로 넣으라고 적어주는 것)
// 타입스크립트를 사용해 타입을 지정해주는 것.
Nav.defaultProps = {
  list: [],
  as: "h2",
};

Nav.PropTypes = {
  // 넘버 또는 스트링으로 구성된 배열이면 돼.
  //list: arrayOf(.oneOfType([string,number])),
  // 타입스크립트는 아니고 리액트가 제공해주는 것
  list: arrayOf(
    shape({
      id: string,
      to: string,
      text: string,
    })
  ).isRequired,
  /* [{ id: string, to: string, text: string }] */
  headline: string.isRequired, // 문자형이 필수값이다!
  as: oneOf(["h2", "h3", "h4", "h5", "h6"]), // 이것들 중 하나 'h2', 'h3'. 'h4', 'h5', 'h6' 이걸로 제한하고 싶어 다른거 들어오면 프롭타입스가 제한해준다.
};
