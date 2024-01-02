import React from "react";

export default function TodoCard(props) {
  return (
    <div className="card m-2">
      <div className="card-body row">
        <div className="col-auto">
          <input
            class="form-check-input"
            type="checkbox"
            checked={props.completed}
            id={props.id}
            onClick={() => props.handleUpdate(props.data)}
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
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}
