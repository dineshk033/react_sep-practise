import { CButton } from "./button";
import { Sum } from "../utility";
import OutlineButton from "../components/button/outline-button";
import Title from "./title";
const firstName = "Dinesh";
const lastName = "MR.";

export default function App() {
  const getFullName = () => {
    return firstName + " " + lastName;
  };
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ margin: "10px" }}>{getFullName()}</div>
      {/* <button disabled>check</button> */}
      <OutlineButton
        label="Submit"
        type="reset"
        disabled={false}
        num={1212}
      ></OutlineButton>
      <CButton label="Reset" color="tomato"></CButton>
      <CButton color="lightblue"></CButton>
      <div>
        {firstName.slice(0, 4)}
        {lastName}
      </div>
      <Title></Title>
      <h5 className="header text-danger">Header in app component</h5>
      <div>{Sum(1, 3)}</div>
    </div>
  );
}
