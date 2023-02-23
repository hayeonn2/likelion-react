import { useEffect } from "react";
import { A11yHidden } from "@/components";

export function SkipToContent({ to, ...restProps }) {
  useEffect(() => {
    // to -> 문자값으로 '#snack'으로 들어온다.
    // document.getElementById() 훨씬빠르다.
    // document.querySelector()
    const targetElement = document.querySelector(to); // null

    if (targetElement) {
      console.log(targetElement);
    }
  }, []);

  const handleJumpToArea = (e) => {
    // 기본동작 막기
    e.preventDefault();
  };

  return (
    <A11yHidden
      as="a"
      href={to}
      onClick={handleJumpToArea}
      {...restProps}
    ></A11yHidden>
  );
}
