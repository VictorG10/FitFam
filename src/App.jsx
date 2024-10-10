import React, { useState } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import WorkOut from "./components/WorkOut";
import { generateWorkout } from "./utils/function";

const App = () => {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const updateWorkout = () => {
    if (muscles.length < 1) {
      return;
    }

    let newWorkout = generateWorkout({ poison, muscles, goal });
    // console.log(newWorkout);
    setWorkout((w) => (w = newWorkout));

    window.location.href = "#workout";
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <WorkOut workout={workout} />}
    </main>
  );
};

export default App;
