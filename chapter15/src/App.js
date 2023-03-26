import './App.css';
import {ColorBox} from "./components/ColorBox";
import {ColorProvider} from "./contexts/color";
import SelectColors from "./components/SelectColors";

function App() {
    return (
        <div className="App">
            <ColorProvider>
                <SelectColors/>
                <ColorBox/>
            </ColorProvider>
        </div>
    );
}

export default App;
