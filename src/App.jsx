import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateExercises from "./components/CreateExercises";
import CreateUsers from "./components/CreateUsers";
import EditExercises from "./components/EditExercises";
import ExercisesList from "./components/ExercisesList";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercises} />
        <Route path="/user" component={CreateUsers} />
      </div>
    </Router>
  );
};

export default App;
