import React, { useContext } from "react";
import { TodoContext } from ".";

export default function TodoCard(props) {
  const context = useContext(TodoContext);
  // console.log(context);
  return (
    <div className="card m-2">
      <div className="card-body row">
        <div className="col-auto">
          <input
            class="form-check-input"
            type="checkbox"
            defaultChecked={props.completed}
            id={props.id}
            onClick={() => context.handleUpdate(props.data)}
          />
        </div>
        <div className="col">
          <div
            htmlFor={props.id}
            className={`${
              props.completed ? "text-decoration-line-through  " : ""
            }`}
          >
            {props.title}
          </div>
        </div>
        <div className="col-2">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => context.handleDelete(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
