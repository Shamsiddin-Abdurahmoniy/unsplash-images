import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsPending(true);
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(req.statusText);
      }
      const data = await req.json();
      setData(data.results);
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { data, isPending, error };
}

export default useFetch;
