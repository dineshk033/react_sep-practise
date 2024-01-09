import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TodoContext } from ".";
import AllTask from "./all-task";

export default function FilterTask() {
  const { list } = useContext(TodoContext);
  const [select, setSelect] = useState(false);
  const [filtered, setFiltered] = useState([]);

  // useEffect(() => {
  //   console.log("called useEffect");
  //   const filterList = (select, list) => {
  //     console.log("called useCallback");
  //     return list.filter((el) => el.completed === select);
  //   };
  //   setFiltered(filterList(select, list));
  // }, [select, list]);
  useEffect(() => {
    console.log("called useEffect");
    const filterList = (select) => {
      console.log("called useCallback");
      return list.filter((el) => el.completed === select);
    };
    setFiltered(filterList(select, list));
  }, [select, list]);

  const handleChange = (e) => {
    console.log("******* change");
    setSelect(e.target.value === "true");
  };
  return (
    <div className="card m-4 p-3">
      <div className="card-body">
        <select
          className="form-control"
          defaultValue={select}
          onChange={(e) => handleChange(e)}
        >
          <option value={false}>New</option>
          <option value={true}>completed</option>
        </select>
        <div>{select.toString()}</div>
        <AllTask list={filtered} />
      </div>
    </div>
  );
}
