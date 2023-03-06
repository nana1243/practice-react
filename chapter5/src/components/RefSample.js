import React, {Component} from "react";

class RefSample extends Component {
    // 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주어야한다.
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={this.input}
                />
            </div>
        )
    }
}

export default RefSample