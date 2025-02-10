import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";
import SignupPage from "./pages/auth/signupPage/SignupPage.jsx";
import LoginPage from "./pages/auth/loginPage/LoginPage.jsx";
import MainPage from "./pages/MainPage/Mainpage";
import BackExercise from "./pages/exercises/backexercise/BackExercise.jsx";
import ChestExercise from "./pages/exercises/chestexercise/ChestExercise.jsx";
import TricepsExercise from "./pages/exercises/tricepsexercise/TricepsExercise.jsx";
import LegsWorkout from "./pages/exercises/legsworkout/LegsWorkout.jsx";
import ShoulderExercise from "./pages/exercises/shoulderexercsie/ShoulderExercise.jsx";
import CoreWorkout from "./pages/exercises/coreworkout/CoreWorkout.jsx";
import WorkoutPage from "./pages/workoutPlans/WorkoutPlans.jsx";
import TodayWorkoutPlans from "./pages/todayWorkoutPlans/TodayWorkoutPlans.jsx";
import DaySelector from "./components/days/DaySelector.jsx";
import EditExercisesPage from "./pages/editExercisesPage/EditExercisesPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage/>} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/" element={<MainPage />} />
          <Route
            path="/exercises/backexercise/BackExercise"
            element={<BackExercise />}
          />
          <Route
            path="/exercises/chestexercise/ChestExercise"
            element={<ChestExercise />}
          />
          <Route
            path="/exercises/tricepsexercise/TricepsExercise"
            element={<TricepsExercise />}
          />
          <Route
            path="/exercises/legsworkout/LegsWorkout"
            element={<LegsWorkout />}
          />
          <Route
            path="/exercises/shoulderexercise/ShoulderExercise"
            element={<ShoulderExercise />}
          />
          <Route
            path="/exercises/coreworkout/CoreWorkout"
            element={<CoreWorkout />}
          />
          <Route path="/workoutplans" element={<WorkoutPage />} />
          <Route path="/todayworkoutplans" element={<TodayWorkoutPlans />} />
          <Route path="/editexercise/:name" element={<EditExercisesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
