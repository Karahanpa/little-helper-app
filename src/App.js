import React from "react";
import WeatherComponent from "./Weather/WeatherComponent";
import ToDoList from "./ToDoList/ToDoList";
import PomodoroTimer from "./Timer/PomodoroTimer";

function App() {
  return (
    <div className="wrapper">
      <WeatherComponent />
      <PomodoroTimer />
      <ToDoList />
    </div>
  );
}

export default App;
