import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Features from "./Components/Features";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import RegisterLogin from "./Components/Register_Login";
import FAQ from "./Components/FAQ";
import Dashboard from "./Components/Dashboard";
import WorkoutTracker from "./Components/WorkoutTracker";
import ExerciseDatabase from "./Components/ExerciseDatabase";
import WorkoutPlanner from "./Components/WorkoutPlanner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/register_login" element={<RegisterLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout-tracker" element={<WorkoutTracker />} />
        <Route path="/exercise-database" element={<ExerciseDatabase />} />
        <Route path="/workout-planner" element={<WorkoutPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
