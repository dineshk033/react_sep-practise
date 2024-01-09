import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url);
  }, [url]);

  function fetch(url) {
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((eror) => {
        setLoading(false);
        setError(eror);
      });
  }
  return [loading, data, error, fetch];
}
