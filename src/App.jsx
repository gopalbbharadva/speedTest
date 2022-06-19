import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Landingpage } from "./Pages/LandingPage/Landingpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/landing" element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;
