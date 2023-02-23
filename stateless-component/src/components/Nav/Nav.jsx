import PropTypes from "prop-types";
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

Nav.defaultProps = {
  // schema설계 (필수적으로 넣으라고 적어주는 것)
  // 타입스크립트를 사용해 타입을 지정해주는 것.
  list: [] /* [{ id: string, to: string, text: string }] */,
  as: "h2", // 이것들 중 하나 'h2', 'h3'. 'h4', 'h5', 'h6' 이걸로 제한하고 싶어
};

Nav.propTypes = {};
