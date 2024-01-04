import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:5000/todo?userId=1")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((eror) => {
        setLoading(false);
        setError(eror);
      });
  }, []);

  return [loading, data, error];
}
