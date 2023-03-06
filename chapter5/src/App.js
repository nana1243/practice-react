import ValidationSample from "./components/ValidationSample";
import ValidationSampleV2 from "./components/ValidationSampleV2";
import ScrollBox from "./components/ScrollBox";

function App() {
    return (
        <div className="App">
            <ValidationSample/>
            <ValidationSampleV2/>
            <ScrollBox
                boxRef={(ref) => {this.scroll = ref}}
            />
        </div>
    );
}

export default App;
