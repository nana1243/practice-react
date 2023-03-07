import Info from "./components/Info";
import {useState} from "react";
import Counter from "./components/Counter";
import InfoV2 from "./components/InfoV2";
import Average from "./components/Average";

function App() {
    const [visible, setVisible] = useState();

    const onClick = (e) =>{
        setVisible(!visible)
    }

    return (
    <div className="App">
        {/*<button onClick={onClick}>{visible ? '숨기기' : '보이기'}</button>*/}
      {/*<Info/>*/}
      {/*  {visible && <Info/>}*/}
        {/*  <Counter/>*/}
        {/*<InfoV2/>*/}
        <Average/>
    </div>
  );
}

export default App;
