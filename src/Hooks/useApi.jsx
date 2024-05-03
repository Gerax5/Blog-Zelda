import { useState, useEffect } from "react";

function useApi(url, options) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setData(data);
          console.log(data)
          setError(null);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url, JSON.stringify(options)]);
  
    return { data, isLoading, error };
}
  
export default useApi;