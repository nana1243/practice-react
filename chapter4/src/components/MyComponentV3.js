import React, {Component} from "react";

class EventPractice extends Component {
    state = {
        username : '',
        message : ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick= () => {
        alert(this.state.message);
        this.setState({
            username : '',
            message : ''
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick()
        }
    }

    render() {
        return (
            <div>
                <h1>연습</h1>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="사용자명"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="아무거나 입력해 보세요"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <h1> userName : {this.state.username}
                     message : {this.state.message}
                </h1>

                <button onClick={this.handleClick}>Confirm</button>
            </div>
        )
    }
}

export default EventPractice;