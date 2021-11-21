import "./App.css";
import Comments from "./Components/Comments";
import NavBar from "./Components/NavBar";
import ReactPlayer from "react-player";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Container">
        <div className="row">
          <div className="content col-8 column">
            <ReactPlayer
              className="MainVideo"
              url="https://www.youtube.com/watch?v=0lR1tt24mo4"
            />
            <br></br>
            <Comments></Comments>
          </div>
          <div className="column">
            <SideBar className="SideBar"></SideBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
