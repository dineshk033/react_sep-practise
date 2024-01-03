import React, { useContext, useState } from "react";
import { TodoContext } from ".";

export default function AddTask() {
  const [input, setInput] = useState();
  const { handleAdd } = useContext(TodoContext);
  function handleAddFunc() {
    const temp = {
      userId: 1,
      title: input,
      completed: false,
    };

    handleAdd(temp);
  }
  return (
    <div className="card m-3 p-3">
      <input
        className="form-control mb-3"
        defaultValue={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add task"
      />
      <button onClick={handleAddFunc} className="btn btn-primary btn-sm">
        Add
      </button>
    </div>
  );
}
