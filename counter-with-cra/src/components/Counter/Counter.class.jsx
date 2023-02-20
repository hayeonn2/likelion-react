import { Component } from "react";

class Counter extends Component {
  // 생성이라는 과정없이 쓸 수 있는 것 (프로토타입 아님)
  static defaultProps = {
    count: 1,
    min: 1,
    max: 10,
    step: 1,
  };
  state = {
    //외부에서(사용자가 설정한) 전달받은거로 초기값 설정
    count: this.props.count,
  };

  // 프로토타입임.
  render() {
    const { count } = this.state;
    return (
      <div data-Component="Counter">
        <button
          type="button"
          onClick={this.handleInc}
          aria-label="카운트 1증가"
        >
          +
        </button>
        <output>{count}</output>
        <button
          type="button"
          onClick={this.handDeInc}
          aria-label="카운트 1감소"
        >
          -
        </button>
      </div>
    );
  }

  // 바인딩을 위해 화살표 함수를 써주자. this 찾을 수 있음
  handleInc = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };

  handleDec = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

// Counter.defaultProps
// 클래스.속성(또는 메서드)

// Counter.prototype.render
// 인스턴스 메서드
// new 클래스().render()

export default Counter;
