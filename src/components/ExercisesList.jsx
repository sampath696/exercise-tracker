import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ExerciseList = () => {
  const Exercise = (props) => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
        <a
          href="/"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );

  const [exercise, setExercise] = useState([]);

  const onDelete = (id) => {
    axios.delete("" + id).then((res) => console.log(res.data));
    setExercise(exercise.filter((el) => el.id !== id));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercise/")
      .then((res) => setExercise(res.data))
      .catch((err) => console.log(err));
  }, []);

  const exerciseList = () => {
    return exercise.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={onDelete}
          key={currentexercise._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
