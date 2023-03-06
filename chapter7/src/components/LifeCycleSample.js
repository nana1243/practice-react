import {Component} from "react";

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null,
    }
    myRef = null

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps!');
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color}
        }
        return null
    }
    componentDidMount() {
        console.log('this is running componentDidMount()!');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(`this is running shouldComponentUpdate ${nextProps} | ${nextState}`)
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    componentWillMount() {
        console.log('this is running componentWillMount():!')
    }
    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        })
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate!');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot){
            console.log(`업데이트 되기 직전 : ${snapshot}`)
        }
    }
    render() {
        console.log(`this is running render()!`)
        const style = {
            color : this.props.color
        }
        return (
            <div>
                <h1 style={style} ref = {ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p> color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )

    }

}
export default LifeCycleSample;