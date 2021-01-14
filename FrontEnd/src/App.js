import "./App.css";
import Addtobatch from "./Components/Addtobatch";
import Batch from "./Components/Batch";
import Student from "./Components/Student";

function App() {
    return (
        <div className="App">
            <Student />
            <Batch />
            <Addtobatch />
        </div>
    );
}

export default App;
