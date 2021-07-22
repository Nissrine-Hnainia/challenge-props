import "./App.css";
import Users from "./components/Users";


function App() {
  return (
    <div className="App">
      <h1>Workshop React Props</h1>
      <Users isValid={true} />
    </div>
  );
}

export default App;
