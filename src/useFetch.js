import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortOrder = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortOrder.signal })
        .then((res) => {
          if (!res.ok)
            throw Error("Oops😢! Could not fetch the data for that resource");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted!");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortOrder.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
