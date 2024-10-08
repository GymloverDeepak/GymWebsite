import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Workout from "./Components/Workout";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weight_loss from "./Components/Weight_loss";
import Weight_Gain from "./Components/Weight_Gain";
import Feedback from "./Components/Feedback";
import Featurs from "./Components/Featurs";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workouts" element={<Workout />} />
          <Route path="/weight-loss" element={<Weight_loss />} />
          <Route path="/weight-gain" element={<Weight_Gain />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/features" element={<Featurs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
