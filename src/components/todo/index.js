import React, { createContext, useEffect, useState } from "react";
import TodoCard from "./todo-card";
import AllTask from "./all-task";
import axios from "axios";
import AddTask from "./addTask";
import useFetch from "../../hooks/useFetch";
import FilterTask from "./filter-task";
const sample = {
  userId: 1,
  id: 3,
  title: "fugiat veniam minus",
  completed: false,
};
export const TodoContext = createContext([]);
export default function TodoComponent() {
  const [list, setList] = useState([]);
  const [loading, data, error, fetch] = useFetch(
    "http://localhost:5000/todo?userId=1"
  );
  // useEffect(() => {
  //   getTask();
  // }, []);

  useEffect(() => {
    setList(data);
  }, [data]);

  function handleUpdate(obj) {
    obj.completed = !obj.completed;
    axios
      .put(`http://localhost:5000/todo/${obj.id}`, obj)
      .then((response) => {
        console.log(response);
        fetch("http://localhost:5000/todo?userId=1");
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:5000/todo/${id}`)
      .then((response) => {
        console.log(response);

        fetch("http://localhost:5000/todo?userId=1");
      })
      .catch((err) => console.log(err));
  }

  function handleAdd(obj) {
    axios
      .post("http://localhost:5000/todo", obj)
      .then((response) => {
        console.log(response);
        fetch("http://localhost:5000/todo?userId=1");
      })
      .catch((err) => console.log(err));
  }
  return (
    <TodoContext.Provider
      value={{ list, handleUpdate, handleDelete, handleAdd }}
    >
      <div className="row">
        {loading && <h1>Loading.....</h1>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        <div className="col-md-6">
          <h4>All Task</h4>
          <AddTask />
          <AllTask list={list} />
        </div>
        <div className="col-md-6">
          <h4>Completed Task</h4>
          <FilterTask />
        </div>
      </div>
    </TodoContext.Provider>
  );
}
