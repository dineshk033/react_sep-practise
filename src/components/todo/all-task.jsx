import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCard from "./todo-card";

export default function AllTask({ handleUpdate, list }) {
  return (
    <>
      {list.map((item) => (
        <TodoCard
          key={item.id}
          {...item}
          data={item}
          handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
}
