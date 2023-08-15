import "./index.css";
import Nav from "./components/Nav.jsx";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </>
  );
}

export default App;
