import classes from "./App.module.css";
import { Button, A11yHidden } from "./components";

function App() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>
      <div role="group" className={classes.buttonGroup}>
        <Button>회원가입</Button>
        <Button secondary>로그인</Button>
        {/* 컴포넌트 자체를 태그로 만들어준다! 접근성 관련. 핵심! 아주관련!! as라는 프롭이 가진 능력이 굉장히 중요하다.
        재사용성을 높여 작업이 가능하다.*/}
      </div>
      <section>
        <A11yHidden as="h2" className="myClassName">
          접근성 준수한 제목
        </A11yHidden>
        <p>
          Lorem Ipsum is simply <a href="">dummy</a> text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>
    </div>
  );
}

export default App;
