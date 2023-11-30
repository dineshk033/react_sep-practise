import { CButton } from "./button";
import { Sum } from "../utility";
import OutlineButton from "../components/button/outline-button";
const firstName = "Dinesh";
const lastName = "MR.";

export default function App() {
  const getFullName = () => {
    return firstName + " " + lastName;
  };
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ margin: "10px" }}>{getFullName()}</div>
      <OutlineButton label="Submit"></OutlineButton>
      <CButton label="Reset" color="tomato"></CButton>
      <CButton color="lightblue"></CButton>
      <div>
        {firstName.slice(0, 4)}
        {lastName}
      </div>
      <div>{Sum(1, 3)}</div>
    </div>
  );
}
