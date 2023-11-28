import { CButton } from "./button";
import { Sum } from "../utility";
const firstName = "Dinesh";
const lastName = "MR.";

export default function App() {
  const getFullName = () => {
    return firstName + " " + lastName;
  };
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ margin: "10px" }}>{getFullName()}</div>

      <CButton></CButton>
      <CButton></CButton>
      <CButton></CButton>
      <CButton></CButton>
      <div>
        {firstName.slice(0, 4)}
        {lastName}
      </div>
      <div>{Sum(1, 3)}</div>
    </div>
  );
}
