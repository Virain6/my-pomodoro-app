import { useState } from "react";
import "./App.css";
import DisplayTimer from "./components/timerDisplay";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Session from "./hooks/Sessions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/session" element={<Session />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
              <DisplayTimer
                initialMinutes={25}
                initialSeconds={0}
                countDown={true}
              />*/
