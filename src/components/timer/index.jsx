import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(true);
  const [intervalcache, setIntervalcache] = useState(null);

  useEffect(() => {
    const tmp = setInterval(() => {
      setCount((n) => {
        console.log(n);
        return n + 1;
      });
    }, 1000);

    setIntervalcache(tmp);
    //unsubscribe
    return () => {
      clearInterval(intervalcache);
    };
  }, []);

  useEffect(() => {
    console.log(play, "enerrrrrrrrrrrrrrrrrrrr");
    if (play === false) {
      clearInterval(intervalcache);
    }
  }, [play]);

  return (
    <div>
      <h1 className="fs-1">{count}</h1>
      <button className="btn btn-danger" onClick={() => setPlay(false)}>
        Stop
      </button>
    </div>
  );
}
