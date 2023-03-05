import {Fragment} from "react";

function App() {
    const name = 'react';
    const name2 = 'react2';
    const name3 = undefined;
    const number = 0;
    const styleFrag3 = {
        backgroundColor : 'black',
        color : 'aqua',
    }
  return (
    <div className="App">
      <Fragment>
          {/*
            주석 사용법
          */}
        <div className="frag1">
            <h1> 리액트 안녕! </h1>
            <h1> 잘 작동하니? </h1>
        </div>
          <div className="frag2">
              <h1>{name} 안녕!</h1>
              <h1>{name} 잘 작동하니?</h1>
          </div>
          <div className="frag3" style={styleFrag3}>
              {name === 'react' ? <h1>리액트 입니다.</h1> : null}
              {name2 === 'react2' && <h1> {name2} 잘 작동합니다.</h1>}
              {number && <h1>{number} 가 존재합니다.</h1>}
              {name3 &&  <h1> {name3} 잘 작동합니다.</h1>}
              <h1>name3 : {name3 || 'undefined'} 값입니다.</h1>
          </div>
      </Fragment>
    </div>
  );
}

export default App;
