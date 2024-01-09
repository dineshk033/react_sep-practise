import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import TodoCard from "./todo-card";

const AllTask = memo(({ list }) => {
  console.log("Usememo rendered", list);
  return (
    <>
      {list.map((item) => (
        <TodoCard key={item.id} {...item} data={item} />
      ))}
    </>
  );
});

export default AllTask;
