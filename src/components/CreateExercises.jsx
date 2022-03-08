import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const CreateExercises = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect( ()=>{
    axios.get('http://localhost:5000/user/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username))
          setUsername(response.data[0].username)
        }
      })
      .catch((error) => {
        console.log(error);
      })

  },[] ) 

  const onchangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onchangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onchangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onchangeDate = (date) => {
    setDate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    console.log(exercise);

    
    axios.post(  'http://localhost:5000/exercise/data', exercise)
      .then(res => console.log(res.data));

   window.location = "/"
  };

  useEffect(() => {
    axios.post('')
    .then( (res)=>{
        if (res.data.length >0 ) {
            setUsers( res.data.map(user => user.username ) );
            setUsername(res.data[0].username);
        }
    } )
  }, []);

  return (
    <div className="container">
      <h3>Create New Exercise Log</h3>
      <form>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onchangeUsername}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onchangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onchangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <div>
            <DatePicker selected={date} onChange={onchangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            onClick={onSubmit}
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercises;
