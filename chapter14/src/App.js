import './App.css';
import {useState} from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          setData(response.data)
        });
  };

  return (
    <div className="App">
      <button onClick={onClick}>불러오기</button>
      <h1>data</h1>
      <span>{data  &&
          <textarea
              rows={7}
              value={JSON.stringify(data,null,2)}
              readOnly={true}
          />}
      </span>
    </div>
  );
}

export default App;
