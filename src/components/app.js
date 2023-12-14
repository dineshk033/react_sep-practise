import { useState } from "react";
import { CButton } from "./button";
import Counter from "./counter";

export default function App() {
  const [count, setCount] = useState(0);

  function handleOperation(type) {
    switch (type) {
      case "add":
        setCount((count) => count + 1);
        break;
      case "sub":
        setCount((count) => count - 1);
        break;
      default:
        setCount(0);
        break;
    }
  }
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-5 ">
          <div className="card">
            <div class="card-body text-center">
              <div className="card-title text-center fs-4">Counter App</div>
              <Counter count={count} />
              <CButton
                label="Decrement"
                className="btn-outline-danger"
                disabled={count <= 0}
                handleClick={() => handleOperation("sub")}
              />
              <CButton
                label="Reset"
                className="btn-outline-secondary mx-3"
                handleClick={() => handleOperation("reset")}
              />
              <CButton
                label="Increment"
                className="btn-outline-success"
                handleClick={() => handleOperation("add")}
              />
            </div>
          </div>
          {/* <h5>Counter App</h5> */}
        </div>
      </div>
    </div>
  );
}
