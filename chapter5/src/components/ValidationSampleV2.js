import React, {Component} from "react";

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validate: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validate: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref = {(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleButtonClick}>Validate</button>
            </div>
        )
    }
}

export default ValidationSample;