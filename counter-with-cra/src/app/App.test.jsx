// 이 이미지는 접근성이 있나요?
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App 컴포넌트 내부의 React 로고는 접근성을 준수 했나요?", () => {
  render(<App />);

  const reactLogo = screen.getByRole("img");

  expect(reactLogo.getAttribute("alt")).toBe("React");
});

// 이 때 앱 가서 alt값 삭제하면 밑줄그어져서 알려준다. 대체텍스트 없다고
// 테스트를 진행하면 npm test app
// 이때 toBe('') 안에 있는 텍스트 값과 다를때 실패가 뜨고, alt값이 저 안의 값과 같으면 성공!
