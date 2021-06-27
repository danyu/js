import logo from "./logo.svg";
import "./App.css";
import VirtualizedList from "./VirtualizedList";

function App() {
  return (
    <div className="App">
      <VirtualizedList height={500} itemHeight={25}></VirtualizedList>
    </div>
  );
}

export default App;
